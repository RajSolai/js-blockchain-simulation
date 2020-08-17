const Miner = require("./miner");
const Block = require("./components/block");

class BlockChain {
	constructor() {
		this.bChain = [this.addGenesis()];
	}
	// create genesis block
	addGenesis() {
		return new Block("genesis block", "0000");
	}
	// get previous hash
	getPreviousHash() {
		return this.bChain[this.bChain.length - 1].hash;
	}
	// add new block to chain
	addBlock(data) {
		this.bChain.push(new Block(data, this.getPreviousHash()));
	}
	// get the block chain
	displayChain() {
		console.dir(this.bChain);
	}
	// check validity of the chain
	checkChain() {
		for (let i = 1; i < this.bChain.length; i++) {
			if (this.bChain[i - 1].hash == this.bChain[i].previousHash) {
				console.log(`Block Connection ${i - 1} to ${i} is Valid`);
			}
		}
	}
}

class Main {
	constructor() {
		this.theChain = new BlockChain();
		this.mainFunction();
		console.log("Displaying the Chain");
		this.displayChain();
		new Miner(this.theChain.bChain);
	}
	mainFunction() {
		this.addBlockToChain("first block");
		this.addBlockToChain("second block");
		this.addBlockToChain("third block");
	}
	addBlockToChain(data) {
		this.theChain.addBlock(data);
	}
	displayChain() {
		this.theChain.displayChain();
		this.theChain.checkChain();
	}
}

const App = new Main();
