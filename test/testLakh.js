const numberFormat = require('../src/index');
const assert = require('assert');

describe ('Test lakh number formatter', () => {
    it('should format number in format of lakh', () => {
        assert.equal(numberFormat(3000000, 'lakh', '-'), '30-00-000');
        assert.equal(numberFormat(3000000, 'lakh'), '30,00,000');
        assert.equal(numberFormat(3000000.123456, 'lakh'), '30,00,000.123456');
        assert.equal(numberFormat("3000000", 'lakh'), '30,00,000');
        assert.equal(numberFormat("3000000.123456", 'lakh'), '30,00,000.123456');
    });
});