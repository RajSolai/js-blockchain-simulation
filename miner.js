//miner.js
const SHA256 = require("crypto-js/sha256");

class Miner {
	constructor(blockChain) {
		this.minedChain = [];
		this.blockChain = blockChain;
		this.mineBlock();
		this.displayMinedChain();
	}
	// Simple Mining Algorithm
	async mineBlock() {
		while (this.minedChain.length != this.blockChain.length) {
			for (let i = 0; i < this.blockChain.length; i++) {
				console.log(`=> Block ${i} is Trying to be mined`);
				if (this.blockChain[i].hash == this.generateHash()) {
					console.log(`Block ${i} is Mined Hurray`);
					console.log(
						`with Block data ${JSON.stringify(
							this.blockChain[i].hash
						)}`
					);
					this.minedChain.push(this.blockChain[i]);
				} else {
					console.log(`No Block Mined`);
				}
			}
		}
	}
	generateHash() {
		let hashRank = Math.floor(Math.random() * 10) + 1;
		return SHA256("thedata" + hashRank).toString();
	}
	displayMinedChain() {
		return console.dir(this.minedChain);
	}
}

module.exports = Miner;
