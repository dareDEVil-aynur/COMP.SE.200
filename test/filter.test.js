import assert from 'assert';
import filter from '../src/filter.js'; 

describe('filter', () => {
  it('should return an array of elements that pass the predicate check', () => {
    const array = [1, 2, 3, 4];
    assert.deepStrictEqual(filter(array, (n) => n % 2 === 0), [2, 4]);
  });

  it('should return `[[]]` if no elements pass the predicate check', () => {
    const array = [1, 3, 5];
    assert.deepStrictEqual(filter(array, (n) => n % 2 === 0), [[]]);
  });

  it('should return `[[]]` for an empty input array', () => {
    assert.deepStrictEqual(filter([], (n) => n > 0), [[]]);
  });

  it('should handle null or undefined arrays gracefully by returning `[[]]`', () => {
    assert.deepStrictEqual(filter(null, (n) => n > 0), [[]]);
    assert.deepStrictEqual(filter(undefined, (n) => n > 0), [[]]);
  });

  it('should pass the correct arguments to the predicate', () => {
    const array = [1, 2, 3];
    const results = [];
    filter(array, (value, index, arr) => {
      results.push({ value, index, array: arr });
      return value > 0;
    });
    assert.deepStrictEqual(results, [
      { value: 1, index: 0, array },
      { value: 2, index: 1, array },
      { value: 3, index: 2, array },
    ]);
  });

  it('should handle objects in arrays', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ];
    assert.deepStrictEqual(
      filter(users, ({ active }) => active),
      [{ user: 'barney', active: true }]
    );
  });

  it('should handle strings in arrays', () => {
    const array = ['hello', 'world', 'foo', 'bar'];
    assert.deepStrictEqual(filter(array, (str) => str.includes('o')), ['hello', 'world', 'foo']);
  });

  it('should handle arrays with only one element that does not pass the predicate', () => {
    assert.deepStrictEqual(filter([0], (n) => n > 0), [[]]);
  });

  it('should handle arrays with only one element that passes the predicate', () => {
    assert.deepStrictEqual(filter([42], (n) => n > 0), [42]);
  });

  it('should return all elements if the predicate always returns true', () => {
    const array = [1, 2, 3, 4];
    assert.deepStrictEqual(filter(array, () => true), [1, 2, 3, 4]);
  });

  it('should return `[[]]` if the predicate always returns false', () => {
    const array = [1, 2, 3, 4];
    assert.deepStrictEqual(filter(array, () => false), [[]]);
  });
});
