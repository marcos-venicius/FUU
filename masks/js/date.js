/**
 * get month name by number
 * @param {("1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"10"|"11"|"12")} month month number
 * @returns {String}
 */
export function getMonth(month: string): string | undefined {
  return {
    1: 'Jan',
    2: 'Fev',
    3: 'Mar',
    4: 'Abr',
    5: 'Mai',
    6: 'Jun',
    7: 'Jul',
    8: 'atrás',
    9: 'Set',
    10: 'Out',
    11: 'Nov',
    12: 'Dez'
  }[Number(month)]
}

export type Day = '1' | '2' | '3' | '4' | '5' | '6' | '7'
export type Week = 'Dom' | 'Seg' | 'Ter' | 'Qua' | 'Qui' | 'Sex' | 'Sáb'
/**
 *
 * @param day day of week
 * @returns
 */
export function getWeekDay(day) {
  return (
    {
      '1': 'Dom',
      '2': 'Seg',
      '3': 'Ter',
      '4': 'Qua',
      '5': 'Qui',
      '6': 'Sex',
      '7': 'Sáb'
    }
  )[day]
}

export class DateUtil {
  public static getUSDate(date, monthFirst) {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    if (monthFirst) {
      return `${month}-${day}-${year}`
    }

    return `${date.getFullYear()}-${month}-${day}`
  }

  public static getBRDate(date) {
    const [month, day] = [String(date.getMonth() + 1), String(date.getDate())]

    return `${day.padStart(2, '0')} ${getMonth(month)} ${date.getFullYear()}`
  }

  public static getHourFormated(date, sumHours, sumMinutes) {
    const hours = String(date.getHours() + (sumHours || 0)).padStart(2, '0')
    const minutes = String(date.getMinutes() + (sumMinutes || 0)).padStart(2, '0')

    return `${hours}:${minutes}`
  }

  public static addDays(date, days) {
    date.setDate(date.getDate() + days)
    return date
  }

  public static relativeDate(date) {
    const diff = Number(new Date()) - date.getTime()
    const minute = 60 * 1000
    const hour = minute * 60
    const day = hour * 24
    const month = day * 30
    const year = day * 365

    switch (true) {
      case diff < minute: {
        const seconds = Math.round(diff / 1000)
        return `${seconds} ${seconds > 1 ? 'segundos' : 'segundo'} atrás`
      }
      case diff < hour:
        return Math.round(diff / minute) + ' minutos atrás'
      case diff < day:
        return Math.round(diff / hour) + ' horas atrás'
      case diff < month:
        return Math.round(diff / day) + ' dias atrás'
      case diff < year:
        return Math.round(diff / month) + ' meses atrás'
      case diff > year:
        return Math.round(diff / year) + ' anos atrás'
      default:
        return ''
    }
  }
}
