# z-number-format

a number format package

### Install
`npm install z-number-format --save`


### params
| Param        | Options           | Default  | Description |
| ------------- |-------------| -----| -------- |
| number | number string or number |none| which number need to format  |
| type | One of ['thousand', 'lakh', 'wan'] |thousand| Define the thousand grouping style, It support three types. thousand style (thousand) : `123,456,789`, indian style (lakh) : `12,34,56,789`, chinese style (wan) : `1,2345,6789`|
| separator | separator | , | Sets the thousands/wan/laxh separator. |

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