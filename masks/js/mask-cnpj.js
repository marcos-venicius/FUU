/**
 * mask cnpj
 * @param {string} cnpj cnpj
 * @returns cnpj masked
 */
export function maskCNPJ(cnpj) {
  const string = cnpj
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");

  if (string.length > 18) return string.slice(0, 18);

  return string;
}
