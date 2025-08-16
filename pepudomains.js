const { ethers } = require("ethers");

class PepuDomains {
    constructor() {
        this.provider = new ethers.JsonRpcProvider("https://rpc-pepu-v2-mainnet-0.t.conduit.xyz");
        this.contractAddress = "0x7Dd0f22672C9AC0B2a88C0a3C8fac1A517C7f324";
        this.abi = ["function resolveName(string, string) view returns (address)"];
        this.contract = new ethers.Contract(this.contractAddress, this.abi, this.provider);
    }

    async resolve(domainName) {
        const walletAddress = await this.contract.resolveName(domainName, ".pepu");
        return walletAddress === ethers.ZeroAddress ? '' : walletAddress;
    }
}

module.exports = { PepuDomains };