# fastrange

> A fast `range` function for JavaScript

Create an array of numbers within a given range.
This is an useful alternative for the `for` loop when using a functional programming style
where using `map` and similar functions are preferred.
Fastrange implements the API of the `range` function in Python.
Fastrange is faster and more lightweight than alternative JavaScript implementations.

## Installation

```shell
$ npm install fastrange
```

## Usage

Using a commonjs module, for use in Node:

```js
const { range } = require('fastrange');
```

Using import, for use with a bundler like webpack:

```js
import { range } from 'fastrange';
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

Optional, start of the range, default `0`

#### stop

Type: `number`

End of the range, not included.

#### step

Type: `number`

Optional, step between the numbers in the range, default `1`

## Tests

```shell
npm test
```

## Related

- [Python range](https://docs.python.org/3/library/stdtypes.html#range)

## License

MIT © 2019 [Edwin Martin](https://bitstorm.org/)
