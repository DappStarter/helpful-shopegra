require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth soap assume idea clinic symptom section'; 
let testAccounts = [
"0x33b31e4b1d9ade0386fb3530d58eae51f1986839f14082d31bbec9bf15bcd0a8",
"0xe00acbfcc7b76a74401db72018e912c7ddf5327e288f2b76a02905d54b1c36c5",
"0xb2cfeba519a7fddb5ec3de60df2329d42c2ee48d3728623f7a39470ee039279d",
"0xd45eff23490891e780445c2f63a531b5be2d7281b0411f217554bd41c02196cd",
"0x5f6566f0b0e862fc5c881f8b472c0f66ca70755a7cbe86af9ecbe57be1bdc6d8",
"0x9e8a2b90e39aaed900320bd56a6c8e5ca059fc6c15987bc70b91dcbb209b6393",
"0xb86478593fd194adfdec70689769543e7d4a4e00070b140ee12c5769438081f7",
"0x0b904325c61f4d87d6b86548926945adc02597cfb088c53980494aa8a8adc1e9",
"0x91ae04e8a2cac6b66201cf567004aae58d32bb29e65e400609d9727325025431",
"0x6f1343bbe60a32d8742577341567b31e309f368ab7d879c95eb53dc9f8ef1873"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
