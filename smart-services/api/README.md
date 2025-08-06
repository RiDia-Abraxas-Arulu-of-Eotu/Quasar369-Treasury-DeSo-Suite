# DeSo Smart Service API

This API listens to DeSo blockchain posts for coinholder registration metadata and automates multi-signature treasury transactions using Gnosis Safe SDK.

## Features

- Listen for coinholder registration posts on DeSo  
- Extract wallet addresses and registration metadata  
- Propose and confirm multi-signature transactions  
- Maintain on-chain/off-chain synchronization

## Setup

1. Clone the repo and navigate to this directory:

```bash
git clone <repo-url>
cd smart-services/api

	2.	Install dependencies:

```bash
npm install

3.	Create .env file with:

RPC_URL=your_ethereum_rpc_endpoint
PRIVATE_KEY=your_private_key
SAFE_ADDRESS=your_gnosis_safe_address
DESO_API_KEY=your_deso_api_key

4.	Run locally:

```bash
npm run dev

Contribution

Please adhere to the main repository’s code style and pull request guidelines.

⸻

Developed by Harold Hakeem Stone-Mayfield, Arulu of Eotu, RiDia Abraxas — Quantum Sovereign Architect courtesy of Eotu Labs WhaleWorks
