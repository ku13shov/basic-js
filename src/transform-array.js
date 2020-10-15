

module.exports = function transform(arr) {
  
  let copyArr = arr.slice();
  let newArr = [];
  
  for (let i = 0; i < copyArr.length; i++) {
    if ((copyArr[i] === '--double-next') && (i !== copyArr.length-1)) {
      newArr.push(copyArr[i + 1]);
      copyArr.splice(i, 1);
    }
    if (copyArr[i] === '--double-prev') {
      newArr.push(copyArr[i - 1]);
      copyArr.splice(i, 1);
    }
    if (copyArr[i] === '--discard-next') {
      copyArr.splice(i, 2);
    }
    if ((copyArr[i] === '--discard-prev') && (i === copyArr.length-1)) {
      newArr.splice((i - 2), 1);
      copyArr.splice(i, 1);
    } else if ((copyArr[i] === '--discard-prev')) {
      newArr.splice((i - 1), 1);
      copyArr.splice(i, 1);
    }
    newArr.push(copyArr[i]);
  }
  for (let i = 0; i < newArr.length; i++) {
    if ((newArr[i] === '--double-next') && (i === newArr.length-1)) {
      newArr.splice(i, 1);
    }
    if ((newArr[i] === undefined) && (i === newArr.length-1)) {
      newArr.splice(i, 1);
    }
    if ((newArr[i] === '--discard-next') && (i === newArr.length-1)) {
      newArr.splice(i, 1);
    }
  }
  
  return newArr;

};
