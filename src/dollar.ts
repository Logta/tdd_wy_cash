import { Money } from '#/money'

class Dollar extends Money {
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier)
  }
}

export { Dollar }
