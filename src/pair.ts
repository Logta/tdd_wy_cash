class Pair {
    private from: string
    private to: string

    constructor(from: string, to: string) {
        this.from = from
        this.to = to
    }

    equals(obj: object) {
        const pair: Pair = obj as Pair
        return this.from === pair.from && this.to === pair.to
    }

    hashCode(): string {
        return JSON.stringify(this)
    }
}

export { Pair }
