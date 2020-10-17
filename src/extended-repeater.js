const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = '';
  let copyOptions = {
    'repeatTimes': 1,
    'separator': '+',
    'addition': '',
    'additionSeparator': '|',
    'additionRepeatTimes': 1,
  };
  
  if ((options['repeatTimes'] === undefined) && (options['additionRepeatTimes'] === undefined)) {
    options['repeatTimes'] = 1;
    options['additionRepeatTimes'] = 1;
  }

  for (let key in options) {
    copyOptions[key] = options[key];
  }
  
  for (let i = 1; i <= copyOptions['repeatTimes']; i++) {
    string = string + str;
    for (let j = 1; j <= copyOptions['additionRepeatTimes']; j++) {
      if (j !== copyOptions['additionRepeatTimes']) {
        string = string + copyOptions['addition'] + copyOptions['additionSeparator'];
      } else if (i !== copyOptions['repeatTimes']) {
        string = string + copyOptions['addition'] + copyOptions['separator'];
      } else {
        string = string + copyOptions['addition'];
      }
    }
  }
  return string;

};
  