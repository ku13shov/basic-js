const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityNum = Number(sampleActivity);
  let k = 0.693/HALF_LIFE_PERIOD;
  let n;

  if (typeof sampleActivity == 'string') {
    if (sampleActivityNum <= 0 || sampleActivityNum > 15  || isNaN(sampleActivityNum)) {
      return false;
    } else {
      n = Math.log(MODERN_ACTIVITY/sampleActivityNum);
      return Math.ceil(n/k);
    }
  } else {
    return false;
  }
};
