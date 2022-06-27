class Money {
  protected amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  equals(obj: Money): boolean {
    return this.amount === obj.amount && this.getClassName() === obj.getClassName()
  }

  getClassName() {
    return this.constructor.name
  }
}

export { Money }
