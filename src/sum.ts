import { Money } from '#/money'
import { Expression } from '#/expression'
import { Bank } from './bank'

class Sum implements Expression {
  augend: Money
  addend: Money

  constructor(augend: Money, addend: Money) {
    this.addend = addend
    this.augend = augend
  }

  reduce(bank: Bank, to: string): Money {
    const amount: number = this.augend.getAmount() + this.addend.getAmount()
    return new Money(amount, to)
  }
}

export { Sum }
