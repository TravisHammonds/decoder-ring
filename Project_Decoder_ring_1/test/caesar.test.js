// Write your tests here!

const expect = require("chai").expect;
const { caesar } = require('../src/caesar');

describe('caesar', () => {
  it('should return false if shift is not a valid integer', () => {
    const actual = caesar("hello", "3uq345h", true)
    const expected = false;
    expect(expected).to.equal(actual);
  });

  it('should return false if shift is 0', () => {
    const actual = caesar("hello", 0, true)
    const expected = false;
    expect(expected).to.equal(actual);
  });

  it('should return false if shift is less than -25', () => {
    const actual = caesar("hello", -26, true)
    const expected = false;
    expect(expected).to.equal(actual);
  });

  it('should return false if shift is greater than 25', () => {
    const actual = caesar("hello", 26, true)
    const expected = false;
    expect(expected).to.equal(actual);
  });

  it('should maintain spaces and non-alphabetic symbols', () => {
    const actual = caesar("Hello There!", 4, true)
    const expected = "lipps xlivi!";
    expect(expected).to.equal(actual);
  });

  it('should ignore capital letters', () => {
    const actual = caesar("Zebra Magazine", 3, true)
    const expected = "cheud pdjdclqh";
    expect(expected).to.equal(actual);
  });

  it('should wrap around the alphabet', () => {
    const actual = caesar("hello", 23, true)
    const expected = "ebiil";
    expect(expected).to.equal(actual);
  });

  it('should encode text to the right', () => {
    const actual = caesar("hello", 7, true)
    const expected = "olssv";
    expect(expected).to.equal(actual);
  });
   

  it('should decode text to the left', () => {
    const actual = caesar("olssv", 7, false)
    const expected = "hello";
    expect(expected).to.equal(actual);
  });
    
});
