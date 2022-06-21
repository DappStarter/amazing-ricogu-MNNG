require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note situate cluster hunt desert equal gate'; 
let testAccounts = [
"0x984d5d7b2fb75b90ee2e9d8aebc5fe71b7f42ad79f0b3616e7ebe5442b1fcc11",
"0xe8c1550332c4346505b84ed8f9799d66974df46c871aea32a8ba0cfc4c03a6f8",
"0xdb04d2812c3f8c70cedbb4024e7e303f7112ac32ddcf66f228347c81109b90b0",
"0x46ec4f409f6f24e2ba6396542af6124ea28fbbdcc8cabfcbea4811581d7cfdd0",
"0xe5ab36239555c5bdc572b1f9b937d8b2ccb41109ecff887386aee31c36d9a3c4",
"0x66e3d7150dc7d94dd7abc17c0a1a3aa5a38ad4bbd7c9ab84cc3326084bb3cfec",
"0xb7c261777c2a82ee824c6001c599642c33242e962bc8e676d293301cb182e955",
"0xd2ad6ace73a3f73a672f16e6663d5cb33f811f91d9cdecfbdf92a629ea49ee47",
"0x7daf77e103e88fa983ce125baa67d9c241b5f831c254e6b4fd1ae2aeb8ffdbcc",
"0x51f6c211266a7e9fa83e1aa848a23e865fdada394219b1041f245ab85f884b6e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

