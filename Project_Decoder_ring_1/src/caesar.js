const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //handle the possible errors
    if (shift === 0 || shift < -25 || shift > 25 || typeof(shift) !== 'number') {
      return false;
    }

    //place the alphabet into a string
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    //create variable for the modified message
    let modifiedInput = "";

    //loop through the input
    for (let i = 0; i < input.length; i++) {
      //ignore capitalization
      let char = input[i].toLowerCase();
      //maintain any special characters by just adding straight to string
      if (!alphabet.includes(char)) {
        modifiedInput += char;
      } else {
        //get the index of the character 
        let charIndex = alphabet.indexOf(char);
        let newIndex;
        if (encode) {
          //set the new index to the shifted amount by adding the shift. Add 26 to negate negative numbers. grab the remainder in case of wrapping around alphabet
          newIndex = (charIndex + shift + 26) % 26;
        } else {
          //same as encoding but subtract the shift
          newIndex = (charIndex - shift + 26) % 26;
        }
        //now add the new character to the modified input by grabbing the new index of alphabet
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
