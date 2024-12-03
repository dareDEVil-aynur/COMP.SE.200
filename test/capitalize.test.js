import assert from 'assert';
import capitalize from '../src/capitalize.js';

describe('capitalize Function', () => {
    it('should capitalize a lowercase word', () => {
        assert.strictEqual(capitalize('hello'), 'Hello');
    });

    it('should capitalize an uppercase word by converting the rest to lowercase', () => {
        assert.strictEqual(capitalize('WORLD'), 'World');
    });

    it('should handle a mixed-case word by converting the rest to lowercase', () => {
        assert.strictEqual(capitalize('jAvAsCrIpT'), 'Javascript');
    });

    it('should handle a single letter', () => {
        assert.strictEqual(capitalize('a'), 'A');
        assert.strictEqual(capitalize('Z'), 'Z');
    });

    it('should return an empty string when input is an empty string', () => {
        assert.strictEqual(capitalize(''), '');
    });

    it('should handle non-string inputs by converting them to strings', () => {
        assert.strictEqual(capitalize(null), 'Null');
        assert.strictEqual(capitalize(undefined), 'Undefined');
        assert.strictEqual(capitalize(123), '123');
        assert.strictEqual(capitalize(true), 'True');
    });

    it('should handle strings with leading and trailing spaces', () => {
        assert.strictEqual(capitalize('   spaced'), '   spaced'); // Leading spaces remain untouched
    });

    it('should handle strings with special characters', () => {
        assert.strictEqual(capitalize('!exclamation'), '!exclamation');
        assert.strictEqual(capitalize('$dollar'), '$dollar');
    });
});
