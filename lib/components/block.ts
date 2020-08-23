import sha256 from "crypto-js/sha256";

export default class Block {
	data: String;
	previousHash: String;
	hash: String;
	// create block
	constructor(data: String, previousHash: String) {
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.hashify();
	}
	// create fingerprint
	hashify() {
		let hashRank = Math.floor(Math.random() * 10) + 1;
		return sha256("thedata" + hashRank).toString();
	}
}
