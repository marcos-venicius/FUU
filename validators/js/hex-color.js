export function validateHexColor(color) {
  return /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/.test(String(color).trim())
}
