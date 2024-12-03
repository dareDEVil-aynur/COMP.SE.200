import { assert } from 'chai';
import every from '../src/every.js';

describe('every', () => {
  it('should return true for an empty array', () => {
    assert.isTrue(every([], Boolean));
  });

  it('should return true if all elements pass the predicate', () => {
    const array = [1, 2, 3, 4];
    const predicate = (value) => value > 0;
    assert.isTrue(every(array, predicate));
  });

  it('should return false if any element fails the predicate', () => {
    const array = [1, 2, 0, 4];
    const predicate = (value) => value > 0;
    assert.isFalse(every(array, predicate));
  });

  it('should return false for null values in the array when using Boolean as predicate', () => {
    const array = [true, 1, null, 'yes'];
    assert.isFalse(every(array, Boolean));
  });

  it('should handle arrays with mixed types correctly', () => {
    const array = [1, '1', true, {}];
    const predicate = (value) => typeof value === 'object';
    assert.isFalse(every(array, predicate));
  });

  it('should correctly handle index and array arguments in predicate', () => {
    const array = [0, 1, 2];
    const predicate = (value, index, arr) => value === arr[index];
    assert.isTrue(every(array, predicate));
  });

  it('should stop iteration early if a falsey value is found', () => {
    let iterations = 0;
    const array = [1, 2, 0, 4];
    const predicate = (value) => {
      iterations += 1;
      return value > 0;
    };
    assert.isFalse(every(array, predicate));
    assert.strictEqual(iterations, 3); // Stops after finding 0
  });

  it('should return true if all elements satisfy the condition, including edge cases', () => {
    const array = [-1, -2, -3];
    const predicate = (value) => value < 0;
    assert.isTrue(every(array, predicate));
  });

  it('should return false for arrays containing `undefined` when using Boolean as predicate', () => {
    const array = [true, undefined, 'yes'];
    assert.isFalse(every(array, Boolean));
  });

  it('should handle non-numeric indexes correctly', () => {
    const array = ['a', 'b', 'c'];
    const predicate = (_, index) => typeof index === 'number';
    assert.isTrue(every(array, predicate));
  });

  it('should return false for arrays containing NaN when the predicate checks for finite numbers', () => {
    const array = [1, 2, NaN];
    const predicate = (value) => Number.isFinite(value);
    assert.isFalse(every(array, predicate));
  });
});
