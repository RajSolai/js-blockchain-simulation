const SHA256 = require("crypto-js/sha256");

module.exports = class Block {
	// create block
	constructor(data, previousHash) {
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.hashify();
	}
	// create fingerprint
	hashify() {
		let hashRank = Math.floor(Math.random() * 10) + 1;
		return SHA256("thedata" + hashRank).toString();
	}
};
