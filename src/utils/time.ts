import dateFormat from 'dateformat'

const getTimeAgo = (date: string | Date | number, compare?: string | Date | number) => {
  const ago = dateFormat(date, 'M-H-d-m-yyyy').split('-')
  const now = dateFormat(compare ?? new Date(), 'M-H-d-m-yyyy').split('-')

  const subDate = now.map((el, i) => {
    return Number(el) - Number(ago[i])
  })

  const { year, month, day, hour, minute } = {
    year: Number(subDate[4]),
    month: Number(subDate[3]),
    day: Number(subDate[2]),
    hour: Number(subDate[1]),
    minute: Number(subDate[0])
  }

  
  if (year !== 0) {
    if(year < 0) throw new Error('Wrong Date')

    const yearStr = year > 1 ? 'years' : 'year'
    return `${year} ${yearStr} ago`
  }

  if (month !== 0) {
    if(month < 0) throw new Error('Wrong Date')

    const monthStr = month > 1 ? 'months' : 'month'
    return `${month} ${monthStr} ago`
  }

  if (day !== 0) {
    if(day < 0) throw new Error('Wrong Date')

    const dayStr = day > 1 ? 'days' : 'day'
    return `${day} ${dayStr} ago`
  }

  if (hour !== 0) {
    if(hour < 0) throw new Error('Wrong Date')

    const hourStr = hour > 1 ? 'hours' : 'hour'
    return `${hour} ${hourStr} ago`
  }

  if (minute !== 0) {
    if(minute < 0) throw new Error('Wrong Date')
    
    const minuteStr = minute > 1 ? 'minutes' : 'minute'
    return `${minute} ${minuteStr} ago`
  }

  return 'Just now'
}

export function getMostRecentTime(date: string | Date) {
  const sumDate = dateFormat(date, 'M-H-d-m-yyyy')
    .split('-')
    .reduce((pre, cur) => cur + pre)
  return Number(sumDate)
}

export default getTimeAgo
