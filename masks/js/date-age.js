export const validateDateAge = (date, minAge) => {
  const [day, month, year] = maskDate(String(date).replace(/\D/g, "")).split(
    "/"
  );

  const newDate = `${month}/${day}/${year}`;

  return (
    Math.round(
      (new Date().getTime() - new Date(newDate).getTime()) /
        1000 /
        (60 * 60 * 24) /
        365.25
    ) >= minAge
  );
};
