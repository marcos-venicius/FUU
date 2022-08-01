export const maskDate = (date) => {
  return String(date)
    .replace(/^(\d{2})(\d)/, "$1/$2")
    .replace(/^(\d{2})(\d{2})/, "$1/$2")
    .replace(/(\d{2}\/)(\d{2})(\d)/, "$1$2/$3")
    .replace(/(\d{2}\/)(\d{2})(\d{4})/, "$1$2$3");
};
