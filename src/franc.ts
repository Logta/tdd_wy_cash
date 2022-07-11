import { Money } from '#/money'

class Franc extends Money {
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier)
  }
}

export { Franc }
