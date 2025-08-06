const express = require('express');
const bodyParser = require('body-parser');
const ethers = require('ethers');
const { QuantumMultiSigTreasuryABI, QuantumMultiSigTreasuryAddress } = require('../config');

const app = express();
app.use(bodyParser.json());

const provider = new ethers.providers.JsonRpcProvider(process.env.ETH_RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const treasuryContract = new ethers.Contract(
  QuantumMultiSigTreasuryAddress,
  QuantumMultiSigTreasuryABI,
  signer
);

app.post('/register-coinholder', async (req, res) => {
  try {
    const { coinholderAddress, postHash, desoUser } = req.body;

    if (!ethers.utils.isAddress(coinholderAddress)) {
      return res.status(400).json({ error: "Invalid Ethereum address" });
    }

    console.log(`Received registration from DeSo user ${desoUser} for wallet ${coinholderAddress}`);

    // Propose and confirm multisig registration transaction here
    // For demonstration: direct call (replace with multisig proposal flow)
    const tx = await treasuryContract.registerCoinholder(coinholderAddress, { gasLimit: 100000 });
    await tx.wait();

    res.status(200).json({ success: true, txHash: tx.hash });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`DeSo Coinholder Registration Service running on port ${PORT}`);
});
