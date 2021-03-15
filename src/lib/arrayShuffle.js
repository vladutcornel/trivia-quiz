/**
 * Shuffle/Randomize the elements of an array
 * A new array is returned.
 * @param {Array} input
 * @returns {Array}
 */
export default function arrayShuffle(input) {
  const work = [...input];
  const out = [];

  while (work.length > 0) {
    const index = Math.floor(Math.random() * work.length) - 1;
    const [value] = work.splice(index, 1);

    out.push(value);
  }

  return out;
}
