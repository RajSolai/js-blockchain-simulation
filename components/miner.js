//miner.js
const SHA256 = require("crypto-js/sha256");

class Miner {
	constructor(blockChain) {
		this.blockChain = blockChain;
		this.mineBlock();
	}
	mineBlock() {
		console.log(this.blockChain)
		for (let i = 0; i < this.blockChain.length; i++) {
			if (this.blockChain[i].hash == this.generateHash()) {
				console.log(`Block ${i} is Mined Hurray`);
				console.log(`with Block data ${this.blockChain[i].data}`);
			}else{
				console.log(`No Block Found`);
			}
		}
	}
	generateHash() {
		let hashRank = Math.floor(Math.random() * 10) + 1;
		return SHA256("thedata" + hashRank).toString();
	}
}

module.exports = Miner;