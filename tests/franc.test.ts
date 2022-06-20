import { Franc } from "#/franc";

describe('Franc', (): void => {
    test('乗算のテスト', (): void => {
        const five: Franc = new Franc(5);
        const product1: Franc = five.times(2);
        expect(product1).toStrictEqual(new Franc(10));

        const product2: Franc = five.times(3);
        expect(product2).toStrictEqual(new Franc(15));
    });

    test('等価性のテスト', (): void => {
        expect(new Franc(5).equals(new Franc(5))).toBe(true);
        expect(new Franc(5).equals(new Franc(6))).toBe(false);
    });
})