import assert from 'assert';
import endsWith from '../src/endsWith.js'; 

describe('endsWith', () => {
  it('should return true if the string ends with the target', () => {
    assert.strictEqual(endsWith('abc', 'c'), true);
  });

  it('should return false if the string does not end with the target', () => {
    assert.strictEqual(endsWith('abc', 'b'), false);
  });

  it('should return true if the string ends with the target up to the given position', () => {
    assert.strictEqual(endsWith('abc', 'b', 2), true);
  });

  it('should return false if the string does not end with the target up to the given position', () => {
    assert.strictEqual(endsWith('abc', 'a', 2), false);
  });

  it('should handle an empty string as input', () => {
    assert.strictEqual(endsWith('', ''), true);
    assert.strictEqual(endsWith('', 'a'), false);
  });

  it('should return false if the target is longer than the string', () => {
    assert.strictEqual(endsWith('abc', 'abcd'), false);
  });

  it('should treat undefined position as the full string length', () => {
    assert.strictEqual(endsWith('abc', 'c', undefined), true);
  });

  it('should handle negative positions gracefully', () => {
    assert.strictEqual(endsWith('abc', 'c', -1), false);
    assert.strictEqual(endsWith('abc', '', -1), true);
  });

  it('should handle NaN as the position value', () => {
    assert.strictEqual(endsWith('abc', 'c', NaN), false);
  });

  it('should return true for empty target and string inputs', () => {
    assert.strictEqual(endsWith('', '', 0), true);
    assert.strictEqual(endsWith('', '', 5), true);
  });

  it('should handle position greater than the string length', () => {
    assert.strictEqual(endsWith('abc', 'c', 5), true);
  });

  it('should be case-sensitive', () => {
    assert.strictEqual(endsWith('abc', 'C'), false);
  });

  it('should handle strings with special characters', () => {
    assert.strictEqual(endsWith('abc!', '!'), true);
    assert.strictEqual(endsWith('abc!', '?'), false);
  });
});
