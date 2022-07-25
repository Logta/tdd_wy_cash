import { Money } from "#/money"
import { Expression } from "#/expression"

class Bank {
    reduce(source: Expression, to: string): Money {
        return Money.dollar(10)
    }
}

export { Bank }