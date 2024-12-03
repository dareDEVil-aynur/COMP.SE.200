import assert from 'assert';
import ceil from '../src/ceil.js';

describe('ceil Function', () => {
    it('should round up to the nearest integer for a positive decimal number', () => {
        assert.strictEqual(ceil(4.006), 5);
    });

    it('should round up a negative decimal number to the nearest integer', () => {
        assert.strictEqual(ceil(-4.006), -4);
    });

    it('should handle precision correctly for positive numbers', () => {
        assert.strictEqual(ceil(6.004, 2), 6.01);
    });

    it('should handle precision correctly for negative numbers', () => {
        assert.strictEqual(ceil(-6.004, 2), -6);
    });

    it('should handle negative precision correctly', () => {
        assert.strictEqual(ceil(6040, -2), 6100);
    });

    it('should round up integers without precision changes', () => {
        assert.strictEqual(ceil(10), 10);
        assert.strictEqual(ceil(-10), -10);
    });

    it('should return NaN if the input is not a number', () => {
        assert.ok(isNaN(ceil('abc')));
        assert.ok(isNaN(ceil(undefined)));
    });

    it('should handle 0 correctly', () => {
        assert.strictEqual(ceil(0), 0);
        assert.strictEqual(ceil(-0), -0);
    });

    it('should handle precision of 0 as the default behavior', () => {
        assert.strictEqual(ceil(4.006, 0), 5);
    });

    it('should handle large numbers and large precisions correctly', () => {
        assert.strictEqual(ceil(123456.789, 1), 123456.8);
        assert.strictEqual(ceil(123456.789, 5), 123456.789);
    });
});
