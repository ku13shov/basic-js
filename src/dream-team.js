const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  let k = 0;

  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (members[i] === null || 
          members[i] === undefined || 
          typeof members[i] === 'number' || 
          typeof members[i] === 'object' || 
          typeof members[i] === 'boolean') {
        
      } else if (members[i][k] == ' ') {
        for (let j = 0; j < members[i].length; j++) {
          if (members[i][j] !== ' ') {
            dreamTeam.push(members[i][j].toUpperCase());
            break;
          }
        }
        
      } else {
        dreamTeam.push(members[i][k].toUpperCase());
      }
    }
    return dreamTeam.sort().join('');
  } else {
    return false;
  }
};
