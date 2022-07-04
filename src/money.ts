abstract class Money {
  protected amount: number

  abstract times(multiplier: number): Money

  constructor(amount: number) {
    this.amount = amount
  }

  getClassName() {
    return this.constructor.name
  }

  equals(obj: Money): boolean {
    return this.amount === obj.amount && this.getClassName() === obj.getClassName()
  }

  static dollar(amount: number): Money {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Dollar } = require('#/dollar')
    return new Dollar(amount)
  }

  static franc(amount: number): Money {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Franc } = require('#/franc')
    return new Franc(amount)
  }
}

export { Money }
