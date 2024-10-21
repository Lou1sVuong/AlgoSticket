
# Web3 Event Ticketing on Algorand

Secure, transparent, and decentralized event ticketing platform built on the Algorand blockchain.

## Demo

> **_NOTE:_**  - The demo video is not up to date with the latest code.

[Check out the demo video here](https://www.youtube.com/watch?v=Jvo0XGCm8wE)

## Overview

This project provides a decentralized and secure platform for event ticketing, leveraging the Algorand blockchain. Users can purchase event tickets using ALGO, the native cryptocurrency of Algorand, ensuring ticket authenticity and fraud prevention through transparent blockchain transactions.

## Key Technologies

- **Algorand Blockchain**: Enables decentralized and secure ticketing through smart contracts and on-chain transactions.
- **ALGO**: The cryptocurrency used for ticket purchases.
- **Smart Contracts**: Handle ticket issuance, sales, ownership transfers, and event management.
- **Frontend**: Built using Next.js for user interactions.


## Features

- **Secure Transactions**: Buy tickets using ALGO securely via Algorand smart contracts.
- **Decentralized Ticketing**: Leverages blockchain for a decentralized, transparent event management system.
- **Transparent Records**: All ticket transactions are recorded on the blockchain, preventing fraud or duplication.
- **Digital Ticket Ownership**: Tickets are verifiable blockchain assets, proving ownership.
- **Low Fees**: Algorand's network offers fast and affordable transactions.

## Roadmap

- [ ] Create an event
- [x] Buy a ticket
- [ ] Sell a ticket
- [ ] Cancel an event

> **_NOTE:_**  - Create an event, Buy a ticket, Sell a ticket, Cancel an event are comming soon

## Achievements and Key Components

1. **Algorand Smart Contracts**: 
   - Built using PyTeal to issue, transfer, and validate ticket ownership.
   - Handles ticket purchasing logic, ensuring secure transfers of ALGO and ticket ownership on the blockchain.

2. **Web User Interface**:
   - Implemented a React-based UI for users to browse and purchase tickets.
   - Integrated with Algorand wallets (e.g., AlgoSigner or MyAlgo Wallet) for seamless transactions.


## Running the Code

### Prerequisites

- **Node.js** (v14.x or higher)
- **Algorand Wallet** (e.g., MyAlgo Wallet, AlgoSigner)
- **Algorand Testnet Account** (for testing purposes)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Lou1sVuong/AlgoTickets.git
   cd AlgoTickets
   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

5. Ensure you have access to an Algorand testnet wallet with some test ALGO. Visit the [Algorand TestNet Faucet](https://bank.testnet.algorand.network) to fund your wallet.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.