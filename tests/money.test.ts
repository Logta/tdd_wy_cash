import {Dollar} from "#/money";

describe('money', (): void => {
    test('should say hello to Tom.', (): void => {
        const five: Dollar = new Dollar(5)
        const product1: Dollar = five.times(2);
        expect(10).toBe(product1.amount)

        const product2: Dollar = five.times(3);
        expect(15).toBe(product2.amount)
    });
})