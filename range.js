/**!
 @preserve range 1.5.3
 @copyright 2019 Edwin Martin
 @license MIT
 */

/**
 * Outputs an array of integers in the given range.
 * @param {number} [start=0] Start number of array
 * @param {number} stop End number of array (exclusive)
 * @param {number} [step=1] Step size
 * @return {number[]} Array of integers in the given range
 */
export default function range(start, stop, step) {
	var list, undefined;

	if (step === undefined) {
		if (stop === undefined) {
			stop = start;
			start = 0;
		}
		step = stop > start ? 1 : -1;
	} else if (step < 0 === stop > start) {
		throw new Error("range: invalid step value ${step}");
	}

	list = [];
	if (stop > start) {
		for (var i = start; i < stop; i += step) {
			list.push(i);
		}
	} else {
		for (var i = start; i > stop; i += step) {
			list.push(i);
		}
	}

	return list;
}
