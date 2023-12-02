/**
 * mask currency
 * @param number value
 * @returns masked currency
 */
export function maskCurrency(number: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",

    currency: "BRL",
  })
    .format(Number(String(number)))
    .slice(3);
}
