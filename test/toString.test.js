import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString', () => {
  it('should return "null" for null', () => {
    expect(toString(null)).to.equal('null');
  });

  it('should return "undefined" for undefined', () => {
    expect(toString(undefined)).to.equal('undefined');
  });

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).to.equal('-0');
  });

  it('should convert arrays to strings recursively', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
    expect(toString(['a', 'b', 'c'])).to.equal('a,b,c');
    expect(toString([1, [2, [3]]])).to.equal('1,2,3');
  });

  it('should return the string itself when the input is a string', () => {
    expect(toString('hello')).to.equal('hello');
  });

  it('should convert numbers to strings', () => {
    expect(toString(123)).to.equal('123');
    expect(toString(0)).to.equal('0');
    expect(toString(-123.45)).to.equal('-123.45');
  });

  it('should convert symbols to their string representation', () => {
    const sym = Symbol('test');
    expect(toString(sym)).to.equal(sym.toString());
  });

  it('should handle objects by converting them to strings', () => {
    expect(toString({ a: 1 })).to.equal('[object Object]');
  });

  it('should handle special numeric values', () => {
    expect(toString(Infinity)).to.equal('Infinity');
    expect(toString(-Infinity)).to.equal('-Infinity');
    expect(toString(NaN)).to.equal('NaN');
  });
});
