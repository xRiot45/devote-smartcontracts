# 🗳️ Devote Smartcontracts

Devote Smartcontracts is a Solidity-based smart contract developed using the Hardhat framework. It powers the on-chain voting logic for the Devote platform and records each vote immutably on the blockchain while syncing voting activity with a backend off-chain API.

## 🚀 Overview

This project contains a single contract `Voting.sol` that allows Ethereum wallet users to cast votes on pre-defined proposals. Voting is directly tied to wallet addresses, making every vote traceable on-chain and synced with backend services for additional data processing.

## ⚙️ Features

- On-chain vote recording
- Each vote is tied to a wallet address
- Off-chain syncing via backend API
- Frontend integration using wagmi, ethers.js, and RainbowKit

## 📁 Project Structure

```
contracts/
  └── Voting.sol         # Main smart contract
scripts/
  └── deploy.ts          # Deployment script
hardhat.config.ts        # Hardhat configuration file
```

## 📦 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Compile Contracts

```bash
npx hardhat compile
```

### 3. Deploy Contract (Local Network Example)

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

## 🧪 Testing

There are no unit tests included at this stage.

## 💻 Frontend Integration

The smart contract is integrated into a frontend built with Next.js using the following libraries:

- wagmi
- ethers.js
- RainbowKit

## 🔐 Voting Details

- Votes are publicly linked to the sender's Ethereum address
- Each vote is written on-chain and synced off-chain for advanced backend handling
- No role-based access control (everyone can vote, but cannot create or manage proposals via the contract)

## 📡 Deployment

> Note: The smart contract has not been deployed to any testnet or mainnet yet. To deploy, update `hardhat.config.ts` with your preferred network (e.g., Goerli, Sepolia, Polygon).
