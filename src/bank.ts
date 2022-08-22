import { Money } from '#/money'
import { Expression } from '#/expression'
import { Pair } from '#/pair'

type hashCode = string

class Bank {
    private rates: Map<hashCode, number> = new Map<hashCode, number>()

    reduce(source: Expression, to: string): Money {
        return source.reduce(this, to)
    }

    addRate(from: string, to: string, rate: number) {
        this.rates.set(new Pair(from, to).hashCode(), rate)
    }

    rate(from: string, to: string): number {
        if (from === to) return 1

        const rate = this.rates.get(new Pair(from, to).hashCode())
        if (rate === undefined) throw 'this rate is not registered'
        return rate
    }
}

export { Bank }
