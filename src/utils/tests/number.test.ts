import subNumber from "../number";

describe('subNumber utils', () => {
  test('number < one thousand', () => {
    expect(subNumber(123)).toBe('123')
  })
  test('number > one thousand', () => {
    expect(subNumber(1234)).toBe('1.23 K')
  })
  test('number > one million', () => {
    expect(subNumber(1234567)).toBe('1.23 M')
  })
})