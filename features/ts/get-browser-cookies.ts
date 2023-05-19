export function getBrowserCookies() {
  return document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (previous, current) => ({
        ...previous,
        [String(current[0])]: String(current[1]),
      }),
      {}
    ) as { [key: string]: string };
}
