describe("Check function sum_numbers", function() {
    it('Check expected result', function() {
        const sum = require('../src/sum');
        expect(sum(1,2)).toBe(3);
    });
});
