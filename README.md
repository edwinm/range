[![Build status](https://api.travis-ci.org/edwinm/range.svg?branch=master)](https://travis-ci.org/edwinm/range) [![Coverage Status](https://coveralls.io/repos/github/edwinm/range/badge.svg?branch=master)](https://coveralls.io/github/edwinm/range?branch=master) [![npm version](https://badge.fury.io/js/fastrange.svg)](https://www.npmjs.com/package/fastrange)

# fastrange

> A fast `range` function for JavaScript

Create an array of numbers within a given range.
This is an useful alternative for the `for` loop when using a functional programming style
where using `map`, `filter` and similar functions are preferred.
Fastrange implements the `range` function known from Python.
Fastrange is faster and more lightweight than alternative JavaScript implementations.

## Installation

```shell
$ npm install fastrange
```

## Usage

Using import, as a ESM module, for use with a bundler like webpack or rollup:

```js
import range from 'fastrange';
```

As a commonjs module, for use in Node.js:

```js
const range = require('fastrange');
```

Then:

```js
range(10);
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

range(5, 10);
//=> [5, 6, 7, 8, 9]

range(4, 10, 2);
//=> [4, 6, 8]
```

## API

### range( \[start=0\], stop, \[step=1\] )

Returns an array of numbers dependent of the given parameters.

#### start

Type: `number`

Optional, start of the range, by default `0`

#### stop

Type: `number`

End of the range, this value is not included in the result.

#### step

Type: `number`

Optional, step between the numbers in the range, by default `1`

## Performance

Many different implementations have been tested for perfomance and
the fastest across browsers, using array push in a for loop,
is being used in fastrange.

- [JSPerf range implementations](https://jsperf.com/range-implementation/2)

## Tests

```shell
npm test
```

## Related

- [Python range](https://docs.python.org/3/library/stdtypes.html#range)

## License

MIT © 2019 [Edwin Martin](https://bitstorm.org/)
