class Dollar {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Dollar {
        return new Dollar(this.amount * multiplier);
    }

    equals(obj: Dollar): boolean {
        return this.amount === obj.amount;
    }
}

export { Dollar }