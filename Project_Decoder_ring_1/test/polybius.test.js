const polybius = require("../src/polybius");
const expect = require("chai").expect;
/*
*******Examples**********
polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false
*/

describe("polybius", () => {
    it("should return a string when encoding.", () => {
        const actual = typeof(polybius("thinkful", true)) === "string";
        expect(actual).to.be.true;
    })

    it("should return false if there are not an even number of characters in the string (excluding spaces) when decoding", () => {
        const actual = polybius("12213", false)
        expect(actual).to.be.false;
    })

    it("should maintain spaces throughout", () => {
        const actual = polybius("hi you");
        const expected = "3242 454354"
        expect(actual).to.equal(expected);
    })

    it("should ignore capital letters", () => {
        const actual = polybius("HELLO");
        const expected = "3251131343"
        expect(actual).to.equal(expected);
    })

    it("should convert both I and J to 42 when encoding", () => {
        const actual = polybius("ninja");
        const expected = "3342334211";
        expect(actual).to.equal(expected);
    })

    it("should show both I and J when decoding", () => {
        const actual = polybius("3342334211", false);
        const expected = "n(i/j)n(i/j)a";
        expect(actual).to.equal(expected);
    })
})

