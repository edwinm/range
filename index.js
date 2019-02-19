/**!
 @preserve range 1.0.0
 @copyright 2019 Edwin Martin
 @license MIT
 */
export function range(start, stop, step) {
	let n, offset, multiplicator, undefined;

	if (step === undefined) {
		if (stop === undefined) {
			n = start;
			offset = 0;
		} else {
			n = stop - start;
			offset = start;
		}
		multiplicator = 1;
	} else {
		n = Math.floor((stop - start) / step);
		offset = start;
		multiplicator = step;
	}
	if (n < 0) {
		n = -n;
		multiplicator = -multiplicator;
	}
	return Array.from(new Int16Array(n)).map(
		(a, i) => i * multiplicator + offset
	);
}
