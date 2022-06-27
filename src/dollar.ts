import { Money } from '#/money'

class Dollar extends Money {
  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }
}

export { Dollar }
