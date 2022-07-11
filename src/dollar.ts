import { Money } from '#/money'

class Dollar extends Money {
  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier)
  }
}

export { Dollar }
