import { Money } from './money'
import { Bank } from './bank'

interface Expression {
  reduce(bank: Bank, to: string): Money
  plus(bank: Expression): Expression
}

export { Expression }
