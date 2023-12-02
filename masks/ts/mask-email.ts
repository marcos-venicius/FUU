/**
 *
 * @param email
 * @returns
 */
export function maskEmail(email: string) {
  const [firstPart, server] = email.split("@");

  const [a, b, ...rest] = firstPart.split("");

  const symbols = new Array(rest.length).fill("*").join("");

  return `${a}${b}${symbols}@${server}`;
}
