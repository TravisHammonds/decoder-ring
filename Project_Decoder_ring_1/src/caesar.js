// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    //less than -25, or greater than 25, the function should return false.
    if(!input || input.length === 0) {
      return false
    }
    //
    if(shift < -25 || shift > 25 || shift === 0) {
      return false
    }
    
    //If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).
//     input = "t h i n k f u l"
    let modifiedInput = "";
    // loop through each characters
    for(let i =0; i<input.length; i++){
      let char = input[i];
    // shift the letter by shift amount
      if(char == ' ' || typeof char != "string" ) {
        modifiedInput[i] = char;
      } else {
         modifiedInput[i] = char;
      }
        
    }
    return modifiedInput; 
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
