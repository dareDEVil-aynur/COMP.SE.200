import assert from 'assert';
import difference from '../src/difference.js';

describe('difference', () => {
  it('should return the difference of two arrays', () => {
    assert.deepStrictEqual(difference([2, 1], [2, 3]), [1]);
  });

  it('should return an empty array if all values are excluded', () => {
    assert.deepStrictEqual(difference([2, 1], [1, 2]), []);
  });

  it('should return the original array if no values are excluded', () => {
    assert.deepStrictEqual(difference([2, 1], []), [2, 1]);
  });

  it('should handle arrays with duplicate values', () => {
    assert.deepStrictEqual(difference([2, 2, 1], [2]), [1]);
  });

  it('should return an empty array if the input array is empty', () => {
    assert.deepStrictEqual(difference([], [2, 3]), []);
  });

  it('should handle multiple exclusion arrays', () => {
    assert.deepStrictEqual(difference([2, 1], [2], [1]), []);
  });

  it('should handle non-array-like input gracefully', () => {
    assert.deepStrictEqual(difference(null, [2, 3]), []);
    assert.deepStrictEqual(difference(undefined, [2, 3]), []);
  });

  it('should handle nested arrays correctly', () => {
    assert.deepStrictEqual(difference([2, 1], [[2], 3]), [2, 1]);
  });

  it('should return the correct result with non-primitive values (e.g., objects)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    assert.deepStrictEqual(difference([obj1, obj2], [obj2]), [obj1]);
  });
});
