const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeatStr(str, count, separator) {
  return new Array(count).fill(str).join(separator);
}

function repeater(str, options) {
  let newStr = String(str);
  let addition = options.hasOwnProperty("addition")
    ? String(options.addition)
    : "";
  let repeatTimes = 1;
  if (
    typeof options.repeatTimes === "number" &&
    options.repeatTimes % 1 === 0
  ) {
    repeatTimes = options.repeatTimes;
  }
  let additionRepeatTimes = 1;
  if (
    typeof additionRepeatTimes === "number" &&
    options.additionRepeatTimes % 1 === 0
  ) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  let separator = "+";
  if (options.hasOwnProperty("separator")) {
    separator = String(options.separator);
  }
  let additionSeparator = "|";
  if (options.hasOwnProperty("additionSeparator")) {
    additionSeparator = String(options.additionSeparator);
  }
  newStr += repeatStr(addition, additionRepeatTimes, additionSeparator);
  return repeatStr(newStr, repeatTimes, separator);
}

module.exports = {
  repeater,
};
