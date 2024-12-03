import assert from 'assert';
import add from '../src/add.js'; 

describe('add Function', () => {
    it('should add two positive numbers correctly', () => {
        assert.strictEqual(add(6, 4), 10);
    });

    it('should add a positive and a negative number correctly', () => {
        assert.strictEqual(add(10, -3), 7);
    });

    it('should return the first number when the second is 0', () => {
        assert.strictEqual(add(5, 0), 5);
    });

    it('should return the second number when the first is 0', () => {
        assert.strictEqual(add(0, 8), 8);
    });

    it('should handle two negative numbers correctly', () => {
        assert.strictEqual(add(-5, -2), -7);
    });

    it('should return 0 when both numbers are 0', () => {
        assert.strictEqual(add(0, 0), 0);
    });

    it('should handle floating-point numbers correctly', () => {
        assert.strictEqual(add(1.5, 2.3), 3.8);
    });

    it('should return NaN if one or both inputs are not numbers', () => {
        assert.ok(isNaN(add('a', 2)));
        assert.ok(isNaN(add(2, 'b')));
        assert.ok(isNaN(add('a', 'b')));
    });
});
