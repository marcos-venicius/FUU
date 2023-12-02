/**
 *
 * @param phone
 * @returns
 */
export function maskPhone(phone: string) {
  return phone
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}
