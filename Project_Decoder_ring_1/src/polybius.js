// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusArray = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i", "k"], // Note: 'J' is combined with 'I'
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  function polybius(input = "", encode = true) {
    //handle errors
    //encoded input must be even in length
    let len = input.replace(/\s/g, '').length;
    if ( len % 2 !== 0 && encode == false) return false;
    // create a response string
    let result = "";
    // --------ENCODING --------
    if (encode) {
      //loop through each character in the input
      for (let i = 0; i < input.length; i++) {
        //ignore upper case characters
        let char = input[i].toLowerCase();
        //if character is J, return the value of i
        if (char === "j") {
          result += "42";
        } else if (char === " ") {
          result += " ";
        } else {
          let secondDigit = 1;
          //find which array it is in (y) and the index within the subarray (x). => xy
          polybiusArray.forEach((subArray) => {
            if (subArray.includes(char)) {
              let firstDigit = subArray.indexOf(char) + 1;
              result += `${firstDigit}${secondDigit}`;
            } else {
              secondDigit++;
            }
          });
        }
      }
    } else {
      // --------DECODING --------
      //loop through each 2 characters in the input
      for (let i = 0; i < input.length; i += 2) {
        //use first number to determine the subarray and the second to determine the position
        if(input[i] === " "){
          result += " "
          i++
        }
        let firstDigit = input[i];
        let secondDigit = input[i + 1];
        // add the matching letter to the result string and go to next iteration
        let char = polybiusArray[secondDigit - 1][firstDigit - 1];
        if (char == "i") {
          result += "(i/j)";
        } else {
          result += char;
        }
      }
    }
    //return the result string
    return result;
  }
  return {
    polybius,
  };
})();

console.log(polybiusModule.polybius("122134 123", false))

module.exports = { polybius: polybiusModule.polybius };
