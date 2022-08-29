import { Money } from '#/money'
import { Expression } from '#/expression'
import { Bank } from '#/bank'
import { Sum } from '#/sum'

describe('Dollar', (): void => {
  test('乗算のテスト', (): void => {
    const bank: Bank = new Bank()
    const five: Money = Money.dollar(5)
    const product1: Money = five.times(2).reduce(bank, five.getCurrency())
    expect(product1.equals(Money.dollar(10))).toBe(true)

    const product2: Money = five.times(3).reduce(bank, five.getCurrency())
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

  test('plusのテスト', (): void => {
    const five: Money = Money.dollar(5)
    const sum: Expression = five.plus(five)
    const bank: Bank = new Bank()
    const reduced: Money = bank.reduce(sum, 'USD')
    expect(reduced).toEqual(Money.dollar(10))
  })

  test('plus -> return Sum', (): void => {
    const five: Money = Money.dollar(5)
    const result: Expression = five.plus(five)
    const sum: Sum = result as Sum
    expect(five).toEqual(sum.augend)
    expect(five).toEqual(sum.addend)
  })

  test('sumのreduceテスト', (): void => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4))
    const bank: Bank = new Bank()
    const result: Money = bank.reduce(sum, 'USD')
    expect(result).toEqual(Money.dollar(7))
  })

  test('moneyのreduceテスト', (): void => {
    const bank: Bank = new Bank()
    const result: Money = bank.reduce(Money.dollar(1), 'USD')
    expect(result).toEqual(Money.dollar(1))
  })

  test('2フランを1ドルに換算する', (): void => {
    const bank: Bank = new Bank()
    bank.addRate('CHF', 'USD', 2)
    const result: Money = bank.reduce(Money.franc(2), 'USD')
    expect(result).toEqual(Money.dollar(1))
  })

  test('same currency', (): void => {
    expect(1).toBe(new Bank().rate('USD', 'USD'))
  })

  test('通貨を混ぜた足し算のテスト', (): void => {
    const fiveBucks: Expression = Money.dollar(5)
    const tenFrancs: Expression = Money.franc(10)

    const bank: Bank = new Bank()
    bank.addRate('CHF', 'USD', 2)
    const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), 'USD')

    expect(result).toStrictEqual(Money.dollar(10))
  })
})
