"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sha256_1 = __importDefault(require("crypto-js/sha256"));
var Block = /** @class */ (function () {
    // create block
    function Block(data, previousHash) {
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.hashify();
    }
    // create fingerprint
    Block.prototype.hashify = function () {
        var hashRank = Math.floor(Math.random() * 10) + 1;
        return sha256_1.default("thedata" + hashRank).toString();
    };
    return Block;
}());
exports.default = Block;
