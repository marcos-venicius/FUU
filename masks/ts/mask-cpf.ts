/**
 * mask cpf
 * @param cpf cpf
 * @returns masked cpf
 */
export function maskCPF(cpf: string) {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2");
}
