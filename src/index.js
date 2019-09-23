(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
            typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.numberFormat = factory());
    }
    (this, function () {
        'use strict';
        const thousandsGroupRegex = {
            "lakh": /(?<!\d*\.\d*)(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g,
            "wan": /(?<!\d*\.\d*)(\d)(?=(\d{4})+(?!\d))/g,
            "thousand": /(?<!\d*\.\d*)(\d)(?=(\d{3})+(?!\d))/g
        };

        /**
         * Add thousand separators on number
         * Define the thousand grouping style, It support three types.
         * thousand style (thousand) : 123,456,789,
         * indian style (lakh) : 12,34,56,789,
         * chinese style (wan) : 1,2345,6789
         * @param {inputNumber} number -which need to format
         * @param {string} type -One of thousandsGroupRegex ['thousand', 'lakh', 'wan']
         * @param {string} separator -separator  
         * @returns {string}
         */
        function numberFormat(number, type = "thousand", separator = ",") {
            let numberType = typeof number;
            if (numberType !== 'string' && numberType !== 'number') {
                throw new TypeError("number must be a string or number");
            }
            if (-1 === Object.keys(thousandsGroupRegex).indexOf(type)) {
                throw new RangeError("type must One of thousandsGroupRegex ['thousand', 'lakh', 'wan']")
            }
            number = String(number);
            // console.log(number,thousandsGroupRegex[type],"$1"+separator);
            return number.replace(thousandsGroupRegex[type], "$1" + separator);
        };

        //    exposed public method
        return numberFormat;
    })
);