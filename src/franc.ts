import { Money } from '#/money'

class Franc extends Money {
  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier)
  }
}

export { Franc }
