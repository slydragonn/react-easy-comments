import dateFormat from 'dateformat'

const getTimeAgo = (date: string | Date | number) => {
  const ago = dateFormat(date, 'M-H-d-m-yyyy').split('-')
  const now = dateFormat(new Date(), 'M-H-d-m-yyyy').split('-')

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
    const yearStr = year > 1 ? 'years' : 'year'
    return `${year} ${yearStr} ago`
  }

  if (month !== 0) {
    const monthStr = month > 1 ? 'months' : 'month'
    return `${month} ${monthStr} ago`
  }

  if (day !== 0) {
    const dayStr = day > 1 ? 'days' : 'day'
    return `${day} ${dayStr} ago`
  }

  if (hour !== 0) {
    const hourStr = hour > 1 ? 'hours' : 'hour'
    return `${hour} ${hourStr} ago`
  }

  if (minute !== 0) {
    const minuteStr = minute > 1 ? 'minutes' : 'minute'
    return `${minute} ${minuteStr} ago`
  }

  return 'Just now'
}

export default getTimeAgo
