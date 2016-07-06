Xy

### N-dimensional Hilbert curve mapping in JS.

    Documentation:  http://bigeasy.github.io/xy
    Source:         http://github.io/bigeasy/xy
    Issues:         http://github.com/bigeasy/xy/issues

    Install:        `npm install xy`

    License:        MIT

## Usage:

Get the Hilbert index of an N-dimensional point.

```js
var xy = require('xy')

xy.hilbert([15,0]) // <-- "255"
xy.hilbert([1,1,0,1]) // <-- "9"
```

Get a point given dimension and Hilbert index.
```js
xy.hilbertInverse(2,0) // <-- "[0,0]"
xy.hilbertInverse(3,63) // <-- "[3,0,0]"
```
