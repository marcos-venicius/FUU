type Months =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

type WeekDays = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type DisplayWeekDays = "Dom" | "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sáb";

/**
 * get month name by number
 * @param month month number
 * @returns
 */
export function getMonth(month: Months) {
  return {
    1: "Jan",
    2: "Fev",
    3: "Mar",
    4: "Abr",
    5: "Mai",
    6: "Jun",
    7: "Jul",
    8: "atrás",
    9: "Set",
    10: "Out",
    11: "Nov",
    12: "Dez",
  }[Number(month)];
}

/**
 *
 * @param day day of week
 * @returns
 */
export function getWeekDay(day: WeekDays): DisplayWeekDays {
  return {
    1: "Dom",
    2: "Seg",
    3: "Ter",
    4: "Qua",
    5: "Qui",
    6: "Sex",
    7: "Sáb",
  }[day] as DisplayWeekDays;
}

export class DateUtil {
  /**
   *
   * @param date
   * @param monthFirst
   * @returns
   */
  static getUSDate(date: Date, monthFirst?: boolean) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    if (monthFirst) return `${month}-${day}-${year}`;

    return `${date.getFullYear()}-${month}-${day}`;
  }

  /**
   *
   * @param date
   * @param separator default is " "
   * @returns
   */
  static getBRDate(date: Date, separator = " ") {
    const [month, day] = [String(date.getMonth() + 1), String(date.getDate())];

    return `${day.padStart(2, "0")}${separator}${getMonth(
      month as Months
    )}${separator}${date.getFullYear()}`;
  }

  /**
   *
   * @param date
   * @param sumHours
   * @param sumMinutes
   * @returns
   */
  static getHourFormated(date: Date, sumHours?: number, sumMinutes?: number) {
    const hours = String(date.getHours() + (sumHours || 0)).padStart(2, "0");
    const minutes = String(date.getMinutes() + (sumMinutes || 0)).padStart(
      2,
      "0"
    );

    return `${hours}:${minutes}`;
  }

  /**
   *
   * @param date
   * @param days
   * @returns
   */
  static addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);
    return date;
  }

  /**
   *
   * @param date
   * @returns
   */
  static relativeDate(date: Date) {
    const diff = Number(new Date()) - date.getTime();
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;

    switch (true) {
      case diff < minute: {
        const seconds = Math.round(diff / 1000);
        return `${seconds} segundos atrás`;
      }
      case diff < hour:
        return Math.round(diff / minute) + " minutos atrás";
      case diff < day:
        return Math.round(diff / hour) + " horas atrás";
      case diff < month:
        return Math.round(diff / day) + " dias atrás";
      case diff < year:
        return Math.round(diff / month) + " meses atrás";
      case diff > year:
        return Math.round(diff / year) + " anos atrás";
      default:
        return "";
    }
  }
}
