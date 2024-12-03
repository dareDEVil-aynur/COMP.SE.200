import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(undefined)).to.be.true;
  });

  it('should return true for boolean values', () => {
    expect(isEmpty(true)).to.be.true;
    expect(isEmpty(false)).to.be.true;
  });

  it('should return true for numbers', () => {
    expect(isEmpty(0)).to.be.true;
    expect(isEmpty(123)).to.be.true;
    expect(isEmpty(-123)).to.be.true;
    expect(isEmpty(NaN)).to.be.true;
    expect(isEmpty(Infinity)).to.be.true;
  });

  it('should return true for empty strings', () => {
    expect(isEmpty('')).to.be.true;
  });

  it('should return false for non-empty strings', () => {
    expect(isEmpty('hello')).to.be.false;
    expect(isEmpty(' ')).to.be.false;
  });

  it('should return true for empty arrays', () => {
    expect(isEmpty([])).to.be.true;
  });

  it('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).to.be.false;
    expect(isEmpty(['a', 'b'])).to.be.false;
  });

  it('should return true for empty objects', () => {
    expect(isEmpty({})).to.be.true;
  });

  it('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).to.be.false;
    expect(isEmpty({ a: undefined })).to.be.false;
  });

  it('should return true for empty Map and Set', () => {
    expect(isEmpty(new Map())).to.be.true;
    expect(isEmpty(new Set())).to.be.true;
  });

  it('should return false for non-empty Map and Set', () => {
    const map = new Map();
    map.set('key', 'value');
    const set = new Set();
    set.add(1);
    expect(isEmpty(map)).to.be.false;
    expect(isEmpty(set)).to.be.false;
  });

  it('should return true for empty arguments object', () => {
    (function () {
      expect(isEmpty(arguments)).to.be.true;
    })();
  });

  it('should return false for non-empty arguments object', () => {
    (function (a, b) {
      expect(isEmpty(arguments)).to.be.false;
    })(1, 2);
  });

  it('should return true for empty Buffer', () => {
    const buffer = Buffer.alloc(0);
    expect(isEmpty(buffer)).to.be.true;
  });

  it('should return false for non-empty Buffer', () => {
    const buffer = Buffer.from('abc');
    expect(isEmpty(buffer)).to.be.false;
  });

  it('should return true for empty typed arrays', () => {
    expect(isEmpty(new Int8Array())).to.be.true;
    expect(isEmpty(new Uint8Array())).to.be.true;
  });

  it('should return false for non-empty typed arrays', () => {
    expect(isEmpty(new Int8Array([1]))).to.be.false;
    expect(isEmpty(new Uint8Array([1, 2]))).to.be.false;
  });

  it('should return true for object prototypes without own properties', () => {
    function Foo() {}
    Foo.prototype.a = 1;
    const foo = new Foo();
    expect(isEmpty(foo)).to.be.true;
  });

  it('should return false for objects with own properties', () => {
    const obj = Object.create({ a: 1 });
    obj.b = 2;
    expect(isEmpty(obj)).to.be.false;
  });

  it('should return true for functions with no enumerable properties', () => {
    function func() {}
    expect(isEmpty(func)).to.be.true;
  });

  it('should return false for functions with enumerable properties', () => {
    function func() {}
    func.prop = 'value';
    expect(isEmpty(func)).to.be.false;
  });
});
