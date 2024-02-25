const sumModule = require("../src/sum.js");

describe("Check function sum_numbers", function() {
    it('Check expected result', function() {
        expect(sumModule(1,2)).toBe(3);
    });
});
