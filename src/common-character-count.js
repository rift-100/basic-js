const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const uniq = Array.from(new Set((s1 + s2).split("")));
  for (let i = 0; i < uniq.length; i += 1) {
    const el = uniq[i];
    const s1count = s1.split("").filter((char) => char === el).length;
    const s2count = s2.split("").filter((char) => char === el).length;
    count += Math.min(s1count, s2count);
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
