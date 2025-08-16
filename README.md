# Pepu Domains SDK

Simple SDK to resolve .pepu domain names to wallet addresses.

## Installation

```bash
npm install pepudomains-sdk
```

## Quick Start

```javascript
const { PepuDomains } = require('pepudomains-sdk');

const pepu = new PepuDomains();
const wallet = await pepu.resolve('teck');
console.log(wallet); 
```

## Usage

```javascript
// Resolve a domain
const wallet = await pepu.resolve('teck');
if (wallet) {
    console.log('Domain found:', wallet);
} else {
    console.log('Domain not found');
}
```

## Run Example

```bash
node example.js
```

## Contract Details

- **Contract Address**: `0x7Dd0f22672C9AC0B2a88C0a3C8fac1A517C7f324`
- **Network**: Pepe Unchained Mainnet
- **RPC**: `https://rpc-pepu-v2-mainnet-0.t.conduit.xyz`

## License

MIT 