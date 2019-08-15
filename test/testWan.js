const numberFormat = require('../src/index');
const assert = require('assert');
describe ('Test wan number formatter', () => {
    it('should format number in format of wan', () => {
        assert.equal(numberFormat(123456, 'wan', '-'), '12-3456');
        assert.equal(numberFormat(123456, 'wan'), '12,3456');
        assert.equal(numberFormat(123456.123456, 'wan'), '12,3456.123456');
        assert.equal(numberFormat("123456", 'wan'), '12,3456');
        assert.equal(numberFormat("123456.123456", 'wan'), '12,3456.123456');
    });

});