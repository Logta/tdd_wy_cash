import { Money } from "#/money"
import { Expression } from "#/expression"

class Sum implements Expression {
    augend: Money;
    addend: Money;

    constructor(augend: Money, addend: Money) {
        this.addend = addend;
        this.augend = augend
    }

    reduce(to: string): Money {
        const amount: number = this.augend.getAmount() + this.addend.getAmount();
        return new Money(amount, to)
    }
}

export { Sum }