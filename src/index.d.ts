//typescript 
// typeof number muse be a string or number
declare type inputNumber = string | number;

/**
 * Add thousand separators on number
 * Define the thousand grouping style, It support three types.
 * thousand style (thousand) : 123,456,789,
 * indian style (lakh) : 12,34,56,789,
 * chinese style (wan) : 1,2345,6789
 */
declare function numberFormat(number:inputNumber, type?:string, separator?:string):string;

//    exposed public method
export default numberFormat;