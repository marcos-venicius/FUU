/**
 * validate hex color format
 * @param {string} color hex color
 * @returns {boolean}
 */
export function validateHexColor(color) {
  const digits = {
    8: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
    6: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
    3: /^#?([\da-fA-F]{1})([\da-fA-F]{1})([\da-fA-F]{1})$/,
  };

  return Object.keys(digits).some((key) => digits[Number(key)].test(color));
}