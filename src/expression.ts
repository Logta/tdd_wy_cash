import { Money } from './money'
import { Bank } from './bank'

interface Expression {
  reduce(bank: Bank, to: string): Money
}

export { Expression }
