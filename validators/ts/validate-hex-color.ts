/**
 * validate hex color
 * @param color hex color
 * @returns if is valid or not
 */
export function validateHexColor(color: string) {
  const digits: { [key: number]: RegExp } = {
    8: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
    6: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
    3: /^#?([\da-fA-F]{1})([\da-fA-F]{1})([\da-fA-F]{1})$/,
  };

  return Object.keys(digits).some((key) => digits[Number(key)].test(color));
}
