

module.exports = function transform(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      newArr.push(arr[i + 1]);
      newArr.pop();
      i += 2;
    } else if (arr[i] === '--discard-prev') {
      newArr.pop();
    } else if (arr[i] === '--double-next') {
      newArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev') {
      newArr.push(arr[i - 1]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
