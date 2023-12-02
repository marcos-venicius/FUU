/**
 * mask currency
 * @param {string} number value
 * @returns masked currency
 */
export function maskCurrency(number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",

    currency: "BRL",
  })
    .format(Number(String(number)))
    .slice(3);
}
