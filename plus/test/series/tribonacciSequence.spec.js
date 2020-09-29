const tribonacciSequence = require("../../series/tribonacciSequence");
const expect = require('chai').expect;

describe("In the Tribonacci series", () => {
    it("the negative number should return error", () => {
        expect(tribonacciSequence(0)).to.throw();
    });
    it("the first number should be 0", () => {
        expect(tribonacciSequence(0)).to.equal(0);
    });
    it("the third number should be 1", () => {
        expect(tribonacciSequence(2)).to.equal(1);
    });
    it("the 15th number should be 927", () => {
        expect(tribonacciSequence(14)).to.equal(927);
    });
    it("the 30th number should be 8646064", () => {
        expect(tribonacciSequence(29)).to.equal(8646064);
    });
});