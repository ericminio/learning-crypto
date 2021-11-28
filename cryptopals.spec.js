const { expect } = require('chai');

describe('cryptopals challenges', () => {

    it('includes Convert hex to base64 challenge', () => {
        let hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
        let base64 = rawToBase64(rawFromHex(hex));
        expect(base64).to.equal('SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t');
    });
    
    it('includes Fixed XOR challenge', () => {
        let one = rawFromHex('1c0111001f010100061a024b53535009181c');
        let two = rawFromHex('686974207468652062756c6c277320657965');
        let xord = xor(one, two);
        expect(rawToHex(xord)).to.equal('746865206b696420646f6e277420706c6179');
    });
})

const rawFromHex = (hex) => {
    return Buffer.from(hex, 'hex');
}
const rawToBase64 = (raw) => {
    return raw.toString('base64');
}
const rawToHex = (raw) => {
    return raw.toString('hex');
}
const xor = (one, two) => {
    let xord = Buffer.alloc(one.length);
    for (var i=0; i<xord.length; i++) {
        xord[i] = one[i] ^ two[i];
    }
    return xord;
}