import { Money } from '#/money'

describe('Dollar', (): void => {
  test('乗算のテスト', (): void => {
    const five: Money = Money.dollar(5)
    const product1: Money = five.times(2)
    expect(product1).toStrictEqual(Money.dollar(10))

    const product2: Money = five.times(3)
    expect(product2).toStrictEqual(Money.dollar(15))
  })

  test('等価性のテスト', (): void => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false)
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true)
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false)

    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false)
  })

  test('currencyのテスト', (): void => {
    expect(Money.dollar(5).getCurrency()).toBe('USD')
    expect(Money.franc(6).getCurrency()).toBe('CHF')
  })
})
