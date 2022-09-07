import getTimeAgo, { getMostRecentTime } from '../time'

describe('Time utils', () => {
  describe('getTimeAgo correctly values', () => {
    test('just now', () => {
      expect(getTimeAgo(new Date())).toBe('Just now')
    })
    test('Minutes', () => {
      expect(getTimeAgo('Wed Sep 07 2022 17:11:52', 'Wed Sep 07 2022 17:12:52')).toBe('1 minute ago')
      expect(getTimeAgo('Wed Sep 07 2022 17:9:52', 'Wed Sep 07 2022 17:12:52')).toBe('3 minutes ago')
    })
    test('Hours', () => {
      expect(getTimeAgo('Wed Sep 07 2022 16:11:52', 'Wed Sep 07 2022 17:11:52')).toBe('1 hour ago')
      expect(getTimeAgo('Wed Sep 07 2022 15:11:52', 'Wed Sep 07 2022 17:11:52')).toBe('2 hours ago')
    })
    test('Days', () => {
      expect(getTimeAgo('Tue Sep 06 2022 16:11:52', 'Wed Sep 07 2022 17:11:52')).toBe('1 day ago')
      expect(getTimeAgo('Mon Sep 05 2022 16:11:52', 'Wed Sep 07 2022 17:11:52')).toBe('2 days ago')
    })
    test('Months', () => {
      expect(getTimeAgo('Sun Aug 07 2022 16:11:52', 'Wed Sep 07 2022 17:11:52')).toBe('1 month ago')
      expect(getTimeAgo('Thu Jul 07 2022 16:11:52', 'Wed Sep 07 2022 17:11:52')).toBe('2 months ago')
    })
    test('Years', () => {
      expect(getTimeAgo('Sun Sep 06 2021 16:11:52', 'Wed Sep 07 2022 17:11:52')).toBe('1 year ago')
      expect(getTimeAgo('Sat Sep 05 2020 16:11:52', 'Wed Sep 07 2022 17:11:52')).toBe('2 years ago')
    })
    test('Incorrect date entry', () => {
      const dateForwardByOne = {
        minute: 'Wed Sep 07 2022 17:12:52',
        hour: 'Wed Sep 07 2022 18:11:52',
        day: 'Thu Sep 08 2022 17:11:52',
        month: 'Fri Oct 07 2022 17:11:52',
        year: 'Thu Sep 07 2023 17:11:52'
      }
      expect(() => {
        getTimeAgo(dateForwardByOne.minute, 'Wed Sep 07 2022 17:11:52')
      }).toThrowError('Wrong Date')

      expect(() => {
        getTimeAgo(dateForwardByOne.hour, 'Wed Sep 07 2022 17:11:52')
      }).toThrowError('Wrong Date')

      expect(() => {
        getTimeAgo(dateForwardByOne.day, 'Wed Sep 07 2022 17:11:52')
      }).toThrowError('Wrong Date')

      expect(() => {
        getTimeAgo(dateForwardByOne.month, 'Wed Sep 07 2022 17:11:52')
      }).toThrowError('Wrong Date')

      expect(() => {
        getTimeAgo(dateForwardByOne.year, 'Wed Sep 07 2022 17:11:52')
      }).toThrowError('Wrong Date')
    })
  })
  test('getMostRecentTime', () => {
    const sumOfDateAsStrings = 2022971712
    expect(getMostRecentTime('Wed Sep 07 2022 17:12:52')).toBe(sumOfDateAsStrings)
  })
})