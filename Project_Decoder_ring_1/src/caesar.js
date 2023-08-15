// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    const alphabet = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
      ["d", 4],
      ["e", 5],
      ["f", 6],
      ["g", 7],
      ["h", 8],
      ["i", 9],
      ["j", 10],
      ["k", 11],
      ["l", 12],
      ["m", 13],
      ["n", 14],
      ["o", 15],
      ["p", 16],
      ["q", 17],
      ["r", 18],
      ["s", 19],
      ["t", 20],
      ["u", 21],
      ["v", 22],
      ["w", 23],
      ["x", 24],
      ["y", 25],
      ["z", 26],
    ]);
    //less than -25, or greater than 25, the function should return false.
    if (
      !input ||
      shift < -25 ||
      shift > 25 ||
      shift === 0
    ) {
      return false;
    }
    let modifiedInput = [];
    // loop through each characters
    for (let i = 0; i < input.length; i++) {
      // set the current character for the iteration
      let char = input[i].toLowerCase();
      // if the character is not a letter, keep it in place
      if (!alphabet.has(char)) modifiedInput[i] = char;
      else {
        //swap the char with the amount shifted
        //find the position of the current character
        let charPosition = alphabet.get(char);
        //find the position of the next character
        let newPosition;
        if (encode) {
          let tempPosition = charPosition + shift;
          //if temp is within the alphabet
          if (1 <= tempPosition && tempPosition <= 26)
            newPosition = tempPosition;
          //if temp wraps the end of the alphabet
          else if (tempPosition > 26) newPosition = tempPosition - 26;
          // if temp wraps around the front of the alphabet
          else if (tempPosition < 1) newPosition = 26 + tempPosition;
        } else {
          let tempPosition = charPosition - shift;
          console.log(char, charPosition, tempPosition)
          //if temp is within the alphabet
          if (1 <= tempPosition && tempPosition <= 26)
            newPosition = tempPosition;
          //if temp wraps the end of the alphabet
          else if (tempPosition > 26) newPosition = tempPosition - 26;
          // if temp wraps around the front of the alphabet
          else if (tempPosition < 1) newPosition = 26 + tempPosition;
        }
        //find the character at the new position
        let newChar;
        for (const [key, value] of alphabet.entries()) {
          if (value === newPosition) {
            newChar = key;
            break;
          }
        }
        //add that character to the modified input at current index
        modifiedInput[i] = newChar;
      }
    }
    console.log(modifiedInput.join(""));
    return modifiedInput.join("");
  }
  return {
    caesar,
  };
})();

caesarModule.caesar("drkxupevvi", 10, false);

module.exports = { caesar: caesarModule.caesar };
