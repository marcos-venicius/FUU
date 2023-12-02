import { DateUtil } from "../../masks/js/mask-date";

/**
 * validate date age
 * @param {Date} date birth date
 * @param {number} minAge min age
 * @returns {boolean} if age is valid or not
 */
export function validateDateAge(date, minAge) {
  const [day, month, year] = DateUtil.getBRDate(date, "/").split("/");

  const newDate = `${month}/${day}/${year}`;

  return (
    Math.round(
      (new Date().getTime() - new Date(newDate).getTime()) /
        1000 /
        (60 * 60 * 24) /
        365.25
    ) >= minAge
  );
}
