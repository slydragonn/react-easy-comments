import dateFormat from 'dateformat'

function getTimeAgo(date:string | Date | number) {
    const ago = dateFormat(date, 'M-H-d-m-yyyy').split('-')
    const now = dateFormat(new Date(), 'M-H-d-m-yyyy').split('-')

    const subDate = now.map((el, i) => {
        return Number(el) - Number(ago[i])
    })

    if (Number(subDate[4]) !== 0) {
        const year = subDate[4] > 1 ? 'years' : 'year'
        return `${subDate[4]} ${year} ago`
    }

    if (Number(subDate[3]) !== 0) {
        const month = subDate[3] > 1 ? 'months' : 'month'
        return `${subDate[3]} ${month} ago`
    }

    if (Number(subDate[2]) !== 0) {
        const day = Number(subDate[2]) > 1 ? 'days' : 'day'
        return `${subDate[2]} ${day} ago`
    }

    if (Number(subDate[1]) !== 0) {
        const hour = Number(subDate[1]) > 1 ? 'hours' : 'hour'
        return `${subDate[1]} ${hour} ago`
    }

    if (Number(subDate[0]) !== 0) {
        const min = Number(subDate[0]) > 1 ? 'minutes' : 'minute'
        return `${subDate[0]} ${min} ago`
    }

    return 'Just now'
}

export default getTimeAgo