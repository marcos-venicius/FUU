/**
 *
 * @param {string} email
 * @returns
 */
export function maskEmail(email) {
  const [firstPart, server] = email.split("@");

  const [a, b, ...rest] = firstPart.split("");

  const symbols = new Array(rest.length).fill("*").join("");

  return `${a}${b}${symbols}@${server}`;
}
