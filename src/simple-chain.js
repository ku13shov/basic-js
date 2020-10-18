const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  newChain: [],
  strChain: '',
  newStr: '',
  addLink(value) {
    this.chain.push(`( ${value} )~~`);
    return this;
  },
  getLength() {
    return this.chain.length;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      throw new Error('THROWN');
    } else if (((position - 1) < 0) || 
              ((position) > this.chain.length)) {
      throw new Error('THROWN');
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res;
    this.strChain = this.chain.join('');
    for (i = 0; i < this.strChain.length; i++) {
      this.newChain.push(this.strChain[i]);
    }
    this.newChain.splice(this.newChain.length-2, 2);
    this.newStr = this.newChain.join('');
    res = this.newStr;
    this.chain = [];
    this.newChain = [];
    this.strChain = '';
    this.newStr = '';
    return res;
  }
};

module.exports = chainMaker;
