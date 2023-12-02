/**
 * validate a cnpj number format
 * @param {string} cnpj cnpj
 * @returns {boolean}
 */
export function vlaidateCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj === "") return false;
  if (cnpj.length !== 14) return false;

  const commonCNPJ = [
    "00000000000000",
    "11111111111111",
    "22222222222222",
    "33333333333333",
    "44444444444444",
    "55555555555555",
    "66666666666666",
    "77777777777777",
    "88888888888888",
    "99999999999999",
  ];

  if (commonCNPJ.some((ccnpj) => ccnpj === cnpj)) return false;

  // Valida DVs
  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  let digits = cnpj.substring(size);
  let sum = 0;
  let position = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * position--;
    if (position < 2) position = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== Number(digits.charAt(0))) return false;

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  position = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * position--;
    if (position < 2) position = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== Number(digits.charAt(1))) return false;

  return true;
}
