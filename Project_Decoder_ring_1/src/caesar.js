const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25 || typeof(shift) !== 'number') {
      return false;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let modifiedInput = "";

    for (let i = 0; i < input.length; i++) {
      let char = input[i].toLowerCase();
      if (!alphabet.includes(char)) {
        modifiedInput += char;
      } else {
        let charIndex = alphabet.indexOf(char);
        let newIndex;
        if (encode) {
          newIndex = (charIndex + shift + 26) % 26;
        } else {
          newIndex = (charIndex - shift + 26) % 26;
        }
        modifiedInput += alphabet[newIndex];
      }
    }
    return modifiedInput;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
