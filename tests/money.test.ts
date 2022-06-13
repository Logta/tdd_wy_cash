import {Dollar} from "#/money";

describe('money', (): void => {
    test('乗算のテスト', (): void => {
        const five: Dollar = new Dollar(5);
        const product1: Dollar = five.times(2);
        expect(product1.amount).toBe(10);

        const product2: Dollar = five.times(3);
        expect(product2.amount).toBe(15);
    });

    test('等価性のテスト', (): void => {
        expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
        expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    });
})