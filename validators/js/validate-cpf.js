/**
 * verify if cpf is valid
 * @param {String} cpf string with 11 numbers without any other char else number
 * @returns {boolean} true or false
 */
export function validateCPF(cpf) {
  const nineFirstNumbers = cpf.slice(0, 9).split("");
  const digitVerify = cpf.slice(9);

  const nineFirstNumbersMultiplied = nineFirstNumbers.map(
    (n, i) => Number(n) * (10 - i)
  );

  let sumNineFirstNumbers = 0;

  for (let i = 0; i < 9; i++)
    sumNineFirstNumbers += Number(nineFirstNumbersMultiplied[i]);

  const c1 = (sumNineFirstNumbers * 10) % 11;
  let n1;

  if (c1 === 10 || c1 === 11) {
    n1 = "0";
  } else {
    n1 = String(c1);
  }

  if (n1 !== digitVerify[0]) return false;

  const tenFirstNumbers = cpf.slice(0, 10).split("");
  const tenFirstNumbersMultiplied = tenFirstNumbers.map(
    (n, i) => Number(n) * (11 - i)
  );
  let sumTenFirstNumber = 0;

  for (let i = 0; i < 10; i++) {
    sumTenFirstNumber += Number(tenFirstNumbersMultiplied[i]);
  }

  const c2 = (sumTenFirstNumber * 10) % 11;
  let n2;

  if (c2 === 10 || c2 === 11) {
    n2 = "0";
  } else {
    n2 = String(c2);
  }

  if (n2 !== digitVerify[1]) return false;

  if (cpf === "00000000000") return false;

  return true;
}
