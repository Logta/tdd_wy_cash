class Franc {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Franc {
        return new Franc(this.amount * multiplier);
    }

    equals(obj: Franc): boolean {
        return this.amount === obj.amount;
    }
}

export { Franc }