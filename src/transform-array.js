const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const res = [...arr];
  for (let i = 0; i < arr.length; i += 1) {
    const el = arr[i];
    if (el === "--discard-next") {
      res[i] = null;
      if (i < arr.length) {
        res[i + 1] = null;
      }
    }
    if (el === "--discard-prev") {
      res[i] = null;
      if (i >= 0) {
        res[i - 1] = null;
      }
    }
    if (el === "--double-next") {
      res[i] = null;
      if (i + 1 < arr.length && arr[i + 1] !== null) {
        res[i] = res[i + 1];
      }
    }
    if (el === "--double-prev") {
      res[i] = null;
      if (i - 1 >= 0 && arr[i - 1] !== null) {
        res[i] = res[i - 1];
      }
    }
  }
  return res.filter((el) => el !== null);
}

module.exports = {
  transform,
};
