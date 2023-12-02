import { DateUtil } from "../../masks/js/mask-date";

/**
 * validate date age
 * @param date birth date
 * @param minAge min age
 * @returns if age is valid or not
 */
export function validateDateAge(date: Date, minAge: number) {
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
