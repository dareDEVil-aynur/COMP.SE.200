import { expect } from 'chai';
import isBoolean from '../src/isBoolean.js';

describe('isBoolean', () => {
  it('should return true for true and false', () => {
    expect(isBoolean(true)).to.be.true;
    expect(isBoolean(false)).to.be.true;
  });

  it('should return true for Boolean objects', () => {
    expect(isBoolean(new Boolean(true))).to.be.true;
    expect(isBoolean(new Boolean(false))).to.be.true;
  });

  it('should return false for null and undefined', () => {
    expect(isBoolean(null)).to.be.false;
    expect(isBoolean(undefined)).to.be.false;
  });

  it('should return false for numbers', () => {
    expect(isBoolean(0)).to.be.false;
    expect(isBoolean(1)).to.be.false;
    expect(isBoolean(-1)).to.be.false;
    expect(isBoolean(NaN)).to.be.false;
    expect(isBoolean(Infinity)).to.be.false;
    expect(isBoolean(-Infinity)).to.be.false;
  });

  it('should return false for strings', () => {
    expect(isBoolean('')).to.be.false;
    expect(isBoolean('true')).to.be.false;
    expect(isBoolean('false')).to.be.false;
    expect(isBoolean('0')).to.be.false;
  });

  it('should return false for objects', () => {
    expect(isBoolean({})).to.be.false;
    expect(isBoolean({ a: 1 })).to.be.false;
  });

  it('should return false for arrays', () => {
    expect(isBoolean([])).to.be.false;
    expect(isBoolean([true, false])).to.be.false;
  });

  it('should return false for functions', () => {
    expect(isBoolean(function () {})).to.be.false;
    expect(isBoolean(() => {})).to.be.false;
  });

  it('should return false for symbols', () => {
    expect(isBoolean(Symbol())).to.be.false;
    expect(isBoolean(Symbol('boolean'))).to.be.false;
  });

  it('should return false for BigInt values', () => {
    expect(isBoolean(BigInt(1))).to.be.false;
  });

  it('should return false for date objects', () => {
    expect(isBoolean(new Date())).to.be.false;
  });

  it('should return false for regular expressions', () => {
    expect(isBoolean(/abc/)).to.be.false;
  });

  it('should return false for error objects', () => {
    expect(isBoolean(new Error())).to.be.false;
  });

  it('should return false for Map and Set objects', () => {
    expect(isBoolean(new Map())).to.be.false;
    expect(isBoolean(new Set())).to.be.false;
  });

  it('should return false for typed arrays', () => {
    expect(isBoolean(new Int8Array())).to.be.false;
    expect(isBoolean(new Uint8Array())).to.be.false;
  });

  it('should return false for buffers', () => {
    expect(isBoolean(Buffer.alloc(0))).to.be.false;
  });
});
