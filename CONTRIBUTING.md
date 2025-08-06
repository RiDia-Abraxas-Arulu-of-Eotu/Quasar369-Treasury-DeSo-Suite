# 🤝 Contributing to Quasar369-Treasury-DeSo-Suite

Welcome to the **Quasar 369: QuantumMultiSigTreasury & DeSo Integration Suite**. We are honored by your presence in this sovereign open-source journey. Together, we engineer trustless, quantum-secure systems for a decentralized, philanthropic, and profitable future.

---

## 🧱 Project Philosophy

This project follows a **sovereign contributor ethos** — all contributors are recognized as sovereign co-architects who honor mutual integrity, security, and innovation.

---

## 🧪 Clone & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/RiDia-Abraxas-Arulu-of-Eotu/Quasar369-Treasury-DeSo-Suite.git
cd Quasar369-Treasury-DeSo-Suite

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env
# Edit .env and insert your private keys, RPC URL, etc.

# 4. Compile and test contracts
npx hardhat compile
npx hardhat test

# 5. Run local node (optional)
npx hardhat node


⸻

🌿 Branching Policy
	•	main: Production-ready, audited, and tested.
	•	dev: All contributions and PRs should be based here.

# Start a feature branch from dev
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name

When ready, submit a Pull Request (PR) from your feature/ branch into dev. Once tested and approved, it will be merged into main for release.

⸻

✅ Pull Request Requirements
	•	Clear title and purpose
	•	Reference relevant issues (if any)
	•	Explain security or architectural implications
	•	Pass all tests: npx hardhat test
	•	Follow coding standards below

⸻

🧬 Code Style & Linting

We follow clean, consistent code standards. Please ensure:
	•	JavaScript / TypeScript: Use Prettier and ESLint
	•	Solidity: Format using Hardhat + Prettier plugin for Solidity

Setup Prettier

npm install --save-dev prettier
npx prettier --write .

Example .prettierrc

{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100
}


⸻

👁️‍🗨️ Security & Sovereignty

Never commit private keys, secrets, or sensitive addresses. All contributors are expected to:
	•	Use secure GitHub 2FA
	•	Ensure no supply chain vulnerabilities are introduced
	•	Sign commits whenever possible

# Example GPG signed commit
git commit -S -m "Add sovereign registration endpoint"


⸻

🧿 Final Note

By contributing, you add your signature to the quantum lineage of open-source innovation. All contributions will be timestamped, cryptographically signed, and immortalized via sovereign blockchains.

Thank you for building with us.

— RiDia Abraxas ✦ Architect of Quasar 369

---

Let me know if you’d like the next file (`LICENSE.md`, `SECURITY.md`, `CODE_OF_CONDUCT.md`, etc.). |oai:code-citation|
