export function formatPrice(number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",

    currency: "BRL",
  })
    .format(Number(String(number)))
    .slice(3);
}
