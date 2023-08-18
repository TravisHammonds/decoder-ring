// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input = "", subAlphabet = "", encode = true) {
    //Error handling
    //determine of all elements are unique using helper function
    const areElementsUnique = (subAlphabet) => {
      const encounteredCharacters = [];
      for (let char of subAlphabet) {
        if (encounteredCharacters.includes(char)) {
          return false;
        } else {
          encounteredCharacters.push(char);
        }
      }
      return true;
    };
    //check for errors
    if (subAlphabet.length !== 26 || !areElementsUnique(subAlphabet)) {
      return false;
    }
    //function
    let cipher = {};
    //create the cipher object to reference by pairing each index of the arrays
    for (let i = 0; i < 26; i++) {
      cipher[alphabet[i]] = subAlphabet[i];
    }
    let result = input
      //ignore caps
      .toLowerCase()
      //split each char for array indexing
      .split("")
      //map each index to the appropriate cipher value
      .map((char) => {
        //spaces should be maintained
        if (char === " ") {
          return " ";
        } else if (encode) {
        //simply grab the value for the given key 
          return cipher[char];
        } else {
        //when decoding loop through the cipher, if the cipher key is equal to the char, return the key
          for (const key in cipher) {
            if (cipher[key] === char) {
              return key;
            }
          }
        }
      })
      //join together the array of characters again 
      .join("");
    return result;
  }
  return {
    substitution,
  };
})();
console.log(
  substitutionModule.substitution("message", "plmoknijbuhvygctfxrdzeswaq")
);
//=> ykrrpik
module.exports = { substitution: substitutionModule.substitution };
