const decryptMessage = (message, shift) => {
  let messageLowerCase = message.toLowerCase();

  shift = shift % 26;
  return messageLowerCase.replace(/[a-z]/g, (letter) => {
    let replacementCharCode = letter.charCodeAt(0) - shift;

    if (replacementCharCode < 97) {
      return String.fromCharCode(replacementCharCode + 26);
    } else if (replacementCharCode > 122) {
      return String.fromCharCode(replacementCharCode - 26);
    } else {
      return String.fromCharCode(replacementCharCode);
    }
  });
};

module.exports = decryptMessage;
