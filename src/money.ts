abstract class Money {
  protected amount: number
  protected currency = ''

  abstract times(multiplier: number): Money

  constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  getCurrency() {
    return this.currency
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
    return new Dollar(amount, 'USD')
  }

  static franc(amount: number): Money {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Franc } = require('#/franc')
    return new Franc(amount, 'CHF')
  }
}

export { Money }
