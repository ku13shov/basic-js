const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0;
  for (let subArr of matrix) {
	  for (let elem of subArr) {
		  if (elem === '^^') {
        res += 1;
      }
	  }
  }
  return res;
};
