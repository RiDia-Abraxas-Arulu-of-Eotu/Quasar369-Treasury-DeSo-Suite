const Safe = require('@gnosis.pm/safe-core-sdk').default;
const EthersAdapter = require('@gnosis.pm/safe-ethers-lib').default;
const { ethers } = require('ethers');

async function proposeTransaction(safeAddress, ethRpcUrl, privateKey, txData) {
  const provider = new ethers.providers.JsonRpcProvider(ethRpcUrl);
  const ownerSigner = new ethers.Wallet(privateKey, provider);
  const ethAdapter = new EthersAdapter({ ethers, signer: ownerSigner });

  const safeSdk = await Safe.create({ ethAdapter, safeAddress });

  const transaction = {
    to: txData.to,
    value: txData.value || "0",
    data: txData.data || "0x",
  };

  const safeTransaction = await safeSdk.createTransaction(transaction);
  const txHash = await safeSdk.getTransactionHash(safeTransaction);
  await safeSdk.signTransaction(safeTransaction);

  console.log(`Proposed tx hash: ${txHash}`);

  return { txHash, safeTransaction };
}

module.exports = { proposeTransaction };
