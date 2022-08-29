import { Expression } from '#/expression'
import { Sum } from '#/sum'
import { Bank } from '#/bank'

class Money implements Expression {
  protected amount: number
  protected currency = ''

  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.getCurrency())
  }

  constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  getCurrency() {
    return this.currency
  }

  getAmount() {
    return this.amount
  }

  getClassName() {
    return this.constructor.name
  }

  equals(obj: Money): boolean {
    return this.amount === obj.amount && this.getCurrency() === obj.getCurrency()
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend)
  }

  reduce(bank: Bank, to: string): Money {
    return new Money(this.amount / bank.rate(this.currency, to), to)
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF')
  }
}

export { Money }
