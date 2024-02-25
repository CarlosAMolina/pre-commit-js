describe("Check function sum_numbers", function() {
    it('Check expected result', function() {
        const sum = require('./sum');
        expect(sum_numbers(1,2)).toBe(3);
    });
});
