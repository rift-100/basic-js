const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = "(  )") {
    this.chain.push(`( ${String(value)} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position % 1 !== 0 ||
      position - 1 < 0 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    const res = this.chain.join("~~");
    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
