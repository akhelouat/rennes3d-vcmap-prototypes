
/**
 * Converts a number (e.g. 12345678,9) to a locale-aware and
 * dot-seperated string with given amount of fractional digits (e.g. 12.345.678,90)
 * @param {string|number} value
 * @param {number} fractionDigits
 * @returns {string|number}
 */
function numberToLocaleString(value, fractionDigits) {
  const number = parseInt(value, 10);
  if (Number.isNaN(number)) {
    return number;
  }

  return (/** @type {number} */ value)
    .toLocaleString(navigator.language, {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    });
}

// eslint-disable-next-line import/prefer-default-export
export { numberToLocaleString };
