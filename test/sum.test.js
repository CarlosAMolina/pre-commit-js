import { sum_2 } from "../src/sum.js";
import { exportedForTesting } from "../src/sum.js";


describe("Check function sum_1", function() {
    it('Check expected result', function() {
        expect(exportedForTesting.sum_1(1)).toBe(2);
    });
});

describe("Check function sum_2", function() {
    it('Check expected result', function() {
        expect(sum_2(1)).toBe(3);
    });
});

describe("Check function sum_numbers", function() {
    it('Check expected result', function() {
        expect(exportedForTesting.sum_numbers(1,2)).toBe(3);
    });
});
