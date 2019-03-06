/**!
 @preserve range 1.5.0
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
	var count, offset, multiplicator, end, list, undefined;

	if (step === undefined) {
		if (stop === undefined) {
			count = start;
			offset = 0;
		} else {
			count = stop - start;
			offset = start;
		}
		multiplicator = 1;
	} else {
		count = Math.floor((stop - start) / step);
		offset = start;
		multiplicator = step;
	}

	if (count < 0) {
		count = -count;
		multiplicator = -multiplicator;
	}
	end = count + offset;

	list = [];
	for (var i = offset; i < end; i++) {
		list.push(i * multiplicator);
	}

	return list;
}
