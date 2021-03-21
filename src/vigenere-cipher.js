let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
class VigenereCipheringMachine {

  constructor(isReverse) {
    if (isReverse === undefined) {
      this.isReverse = true;
    } else {
      this.isReverse = isReverse;
    }
  }

  encrypt(string, key) {
    let arrString = string.toLowerCase().split('');
    let arrKey = key.toLowerCase().split('');
    let arrDifference = [];
    let result = [];
    for (let i = 0; i < arrString.length; i++) {
      if (arr.includes(arrString[i])) {
        if (arrKey.length < arrString.length) {
          arrKey.push(arrKey[i]);
        }
        if (((arr.indexOf(arrString[i])) + (arr.indexOf(arrKey[i])) >= 26)) {
          arrDifference.push(((arr.indexOf(arrString[i])) + (arr.indexOf(arrKey[i]))) - 26);
        } else {
          arrDifference.push(((arr.indexOf(arrString[i])) + (arr.indexOf(arrKey[i]))));
        }
        result.push(arr[arrDifference[i]]);
      } else {
        result.push(arrString[i]);
        arrKey.splice(i, 0, ' ');
        arrDifference.splice(i, 0, arrString[i]);
      }
    }
    if (this.isReverse) {
      return result.join('').toUpperCase();
    } else {
      return result.reverse().join('').toUpperCase();
    } 
  }

  decrypt(string, key) {
    let arrString = string.toLowerCase().split('');
    let arrKey = key.toLowerCase().split('');
    let arrDifference = [];
    let result = [];
    for (let i = 0; i < arrString.length; i++) {
      if (arr.includes(arrString[i])) {
        if (arrKey.length < arrString.length) {
          arrKey.push(arrKey[i]);
        }
        if (arr.indexOf(arrString[i]) < arr.indexOf(arrKey[i])) {
          arrDifference.push(((arr.indexOf(arrString[i])) - (arr.indexOf(arrKey[i]))) + 27);
        } else {
          arrDifference.push(((arr.indexOf(arrString[i])) - (arr.indexOf(arrKey[i]))) + 1);
        }
        result.push(arr[arrDifference[i] - 1]);
      } else {
        result.push(arrString[i]);
        arrKey.splice(i, 0, ' ');
        arrDifference.splice(i, 0, arrString[i]);
      }
    }
    if (this.isReverse) {
      return result.join('').toUpperCase();
    } else {
      return result.reverse().join('').toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;
