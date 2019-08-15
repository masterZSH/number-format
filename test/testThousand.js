const numberFormat = require('../src/index');
const assert = require('assert');


describe ('Test thousand number formatter', () => {
    it('should format number in format of thousand', () => {
        assert.equal(numberFormat(123456,'thousand','-'),'123-456');
        assert.equal(numberFormat(123456),'123,456');
        assert.equal(numberFormat(123456.123456),'123,456.123456');
        assert.equal(numberFormat("123456"),'123,456');
        assert.equal(numberFormat("123456.123456"),'123,456.123456');
    });
});