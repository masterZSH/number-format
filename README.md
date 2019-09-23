# z-number-format  [![Downloads](https://img.shields.io/npm/dm/z-number-format.svg)](https://www.npmjs.com/package/z-number-format)  [![Version](https://img.shields.io/npm/v/z-number-format.svg)](https://www.npmjs.com/package/z-number-format) [![License](https://img.shields.io/npm/l/z-number-format.svg)](https://www.npmjs.com/package/z-number-format)

### Install
`npm install z-number-format --save`


### params
| Param        | Options           | Default  | Description |
| ------------- |-------------| -----| -------- |
| number | number string or number |none| which number need to format  |
| type | One of ['thousand', 'lakh', 'wan'] |thousand| Define the thousand grouping style, It support three types. thousand style (thousand) : `123,456,789`, indian style (lakh) : `12,34,56,789`, chinese style (wan) : `1,2345,6789`|
| separator | separator | , | Sets the thousands/wan/laxh separator. |

### import

```js
// es6 module
import numberFormat from 'z-number-format';

// node module
var numberFormat = require('z-number-format');

// cdn Available on unpkg or 74b
<script src="https://unpkg.com/z-number-format@2.0.3/src/index.js"></script> 

<script src="https://74b.cc/js/zNumberFormat.js"></script> 
```

### typescript  
Supports typescript


### use it in website
declare global function numberFormat
```js
<script src="https://74b.cc/js/zNumberFormat.js"></script> 
numberFormat(123456)    
```


### Examples
```js
var numberFormat = require('z-number-format');
numberFormat(123456);
```
Output : 123,456

```js
// format a float
var numberFormat = require('z-number-format');
numberFormat(123456.12345);
```
Output : 123,456.12345

```js
var numberFormat = require('z-number-format');
numberFormat("123456");
```
Output : 123,456


```js
var numberFormat = require('z-number-format');
numberFormat(123456,'wan');
```
Output : 12,3456

```js
var numberFormat = require('z-number-format');
numberFormat(123456,'wan','-');
```
Output : 12-3456

```js
var numberFormat = require('z-number-format');
numberFormat(3000000,'laxh');
```
Output : 30,00,000