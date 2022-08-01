import { Money } from "#/money"
import { Expression } from "#/expression"

class Bank {
    reduce(source: Expression, to: string): Money {
        return source.reduce(to)
    }
}

export { Bank }