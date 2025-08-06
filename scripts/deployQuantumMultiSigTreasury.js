const { ethers } = require("hardhat");

async function main() {
  const [deployer, signer1, signer2] = await ethers.getSigners();

  console.log("Deploying QuantumMultiSigTreasury with deployer:", deployer.address);

  const QuantumMultiSigTreasury = await ethers.getContractFactory("QuantumMultiSigTreasury");

  const signers = [deployer.address, signer1.address, signer2.address];
  const requiredConfirmations = 2;

  const treasury = await QuantumMultiSigTreasury.deploy(signers, requiredConfirmations);
  await treasury.deployed();

  console.log("QuantumMultiSigTreasury deployed at:", treasury.address);

  // Save deployment info to JSON (optional for automation)
  const fs = require('fs');
  fs.writeFileSync('./deployment_address.json', JSON.stringify({ address: treasury.address }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
