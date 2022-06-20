abstract class Money {
    protected amount: number = 0;

    constructor(amount: number) {
        this.amount = amount;
    }

    equals(obj: Money): boolean {
        return this.amount === obj.amount;
    }
}

export { Money }
