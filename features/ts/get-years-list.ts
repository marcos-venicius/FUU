/**
 * get a list of years from current year until `startYear`
 * @param from start year
 * @returns
 */
function getYears(startYear = 2000) {
  const years = new Array(new Date().getFullYear() + 1 - startYear).fill(0)

  return years.map((_, i) => startYear + (years.length - i) - 1)
}
