const reverseCapitalisation = (string) => {
  const stringArray = string.split("");
  const reversedCapitalArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    if (/[A-Z]/.test(stringArray[i])) {
      reversedCapitalArray.push(stringArray[i].toLowerCase());
    } else if (/[a-z]/.test(stringArray[i])) {
      reversedCapitalArray.push(stringArray[i].toUpperCase());
    } else {
      reversedCapitalArray.push(stringArray[i]);
    }
  }

  return reversedCapitalArray.join("");
};

module.exports = reverseCapitalisation;
