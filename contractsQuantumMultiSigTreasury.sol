// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QuantumMultiSigTreasury {
    address[] public signers;
    uint256 public required;

    struct Transaction {
        address to;
        uint256 value;
        bytes data;
        bool executed;
        uint256 confirmations;
        mapping(address => bool) confirmed;
    }

    Transaction[] public transactions;

    modifier onlySigner() {
        require(isSigner(msg.sender), "Not signer");
        _;
    }

    function isSigner(address addr) public view returns (bool) {
        for (uint i = 0; i < signers.length; i++) {
            if (signers[i] == addr) return true;
        }
        return false;
    }

    function submitTransaction(address to, uint256 value, bytes memory data) external onlySigner {
        transactions.push(Transaction({
            to: to,
            value: value,
            data: data,
            executed: false,
            confirmations: 0
        }));
    }

    function confirmTransaction(uint txId) external onlySigner {
        Transaction storage tx = transactions[txId];
        require(!tx.confirmed[msg.sender], "Already confirmed");
        tx.confirmed[msg.sender] = true;
        tx.confirmations++;
    }

    function executeTransaction(uint txId) external onlySigner {
        Transaction storage tx = transactions[txId];
        require(!tx.executed && tx.confirmations >= required, "Cannot execute");
        tx.executed = true;
        (bool success,) = tx.to.call{ value: tx.value }(tx.data);
        require(success, "Transaction failed");
    }

    constructor(address[] memory _signers, uint256 _required) {
        signers = _signers;
        required = _required;
    }

    receive() external payable {}
}
