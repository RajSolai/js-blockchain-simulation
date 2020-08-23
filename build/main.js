"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var block_1 = __importDefault(require("./components/block"));
var BlockChain = /** @class */ (function () {
    function BlockChain() {
        this.bChain = [this.addGenesis()];
    }
    // create genesis block
    BlockChain.prototype.addGenesis = function () {
        return new block_1.default("genesis block", "0000");
    };
    // get previous hash
    BlockChain.prototype.getPreviousHash = function () {
        return this.bChain[this.bChain.length - 1].hash;
    };
    // add new block to chain
    BlockChain.prototype.addBlock = function (data) {
        this.bChain.push(new block_1.default(data, this.getPreviousHash()));
    };
    // get the block chain
    BlockChain.prototype.displayChain = function () {
        console.dir(this.bChain);
    };
    // check validity of the chain
    BlockChain.prototype.checkChain = function () {
        for (var i = 1; i < this.bChain.length; i++) {
            if (this.bChain[i - 1].hash == this.bChain[i].previousHash) {
                console.log("Block Connection " + (i - 1) + " to " + i + " is Valid");
            }
        }
    };
    return BlockChain;
}());
var Main = /** @class */ (function () {
    function Main() {
        this.theChain = new BlockChain();
        this.mainFunction();
        console.log("Displaying the Chain");
        this.displayChain();
    }
    Main.prototype.mainFunction = function () {
        this.addBlockToChain("first block");
        this.addBlockToChain("second block");
        this.addBlockToChain("third block");
    };
    Main.prototype.addBlockToChain = function (data) {
        this.theChain.addBlock(data);
    };
    Main.prototype.displayChain = function () {
        this.theChain.displayChain();
        this.theChain.checkChain();
    };
    return Main;
}());
var App = new Main();
