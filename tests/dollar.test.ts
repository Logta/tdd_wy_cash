import { Money } from '#/money'

describe('Dollar', (): void => {
  test('乗算のテスト', (): void => {
    const five: Money = Money.dollar(5)
    const product1: Money = five.times(2)
    expect(product1.equals(Money.dollar(10))).toBe(true)

    const product2: Money = five.times(3)
    expect(product2.equals(Money.dollar(15))).toBe(true)
  })

  test('等価性のテスト', (): void => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false)

    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false)
  })

  test('currencyのテスト', (): void => {
    expect(Money.dollar(5).getCurrency()).toBe('USD')
    expect(Money.franc(6).getCurrency()).toBe('CHF')
  })
})
