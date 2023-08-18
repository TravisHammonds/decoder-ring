const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"

    it("should maintain spaces throughout", () => {
        const actual = substitution("hi there", alphabet, true);
        const expected = "ru jrmhm"
        expect(actual).to.equal(expected);
    })

    it("should ignore capital letters", () => {
        const actual = substitution("HiHI", alphabet, true);
        const expected = "ruru"
        expect(actual).to.equal(expected);
    })

    it("should return false if the alphabet does not contain 26 characters", () => {
        const actual = substitution("hi there", "mcgruaflnthdjpzibev", true);
        expect(actual).to.be.false
    })

    it("should return false if each element of alphabet is not unique", () => {
        const actual = substitution("hi there", "xoyxmcgrukswaflntldjpzibev", true);
        expect(actual).to.be.false
    })
});