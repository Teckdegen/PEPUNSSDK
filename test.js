const { PepuDomains } = require('./pepudomains.js');

async function main() {
    const pepu = new PepuDomains();
    const wallet = await pepu.resolve('ni');
    console.log(wallet);
}

main().catch(console.error);