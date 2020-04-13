## css-unit-convert

Converts numeric units to pixel and other units remain same.

### install

```
yarn add css-unit-convert
```

### usage 

```js

const {cssUnit} = require("css-unit-convert");

cssUnit(10); // => "10px"

cssUnit(); // => "0px"

cssUnit("123"); // => "123px"

cssUnit("123vh"); // => "123vh"

cssUnit("123%"); // => "123%"

cssUnit("123rem"); // => "123rem"

cssUnit("123px"); // => "123px"

cssUnit(null); // => "0px"

```
