import { Money } from '#/money'
import { Expression } from '#/expression'
import { Bank } from './bank'

class Sum implements Expression {
  augend: Expression
  addend: Expression

  constructor(augend: Expression, addend: Expression) {
    this.addend = addend
    this.augend = augend
  }

  reduce(bank: Bank, to: string): Money {
    const amount: number = this.augend.reduce(bank, to).getAmount() + this.addend.reduce(bank, to).getAmount()
    return new Money(amount, to)
  }

  plus(bank: Expression): Expression {
    return new Money(0, 'USD') as Expression
  }
}

export { Sum }
