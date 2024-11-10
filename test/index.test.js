const assert = require("assert");
const sayHello = require("../index");

describe("sayHello Function", () => {
  it("should return 'Hello World!'", () => {
    assert.strictEqual(sayHello(), "Hello World!");
  });
});
