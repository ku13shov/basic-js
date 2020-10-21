const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;

    for (let i = 0; i < arr.length; i++) { 
      if (typeof arr[i] === 'object') {
        arr = arr.flat();
        res += 1;
        i = -1;
      }
    }
    return res;
  }
};