export const toMatchUnorderedArrary: jest.CustomMatcher = function (
    actual: Array<unknown>,
    expected: Array<unknown>
) {
    if (!Array.isArray(actual) || !Array.isArray(expected)) {
        throw new TypeError('These must be of type array!');
    }

    const print = () =>
        `Expected: ${this.utils.printExpected(expected)}. \n` +
        `Received: ${this.utils.printReceived(actual)}. \n`;

    const expectedMap = new Map(expected.map((item) => [item, false]));
    const unexpectedItemList = [];

    for (const item of actual) {
        if (!expectedMap.has(item) || expectedMap.get(item)) unexpectedItemList.push(item);
        else expectedMap.set(item, true);
    }

    if (unexpectedItemList.length) {
        return {
            pass: false,
            message: () =>
                `Receive unexpected items: ${this.utils.printReceived(unexpectedItemList)}. \n` +
                print(),
        };
    }

    const missingItemList = Array.from(expectedMap)
        .filter(([_, isAppeared]) => !isAppeared)
        .map(([item]) => item);

    if (missingItemList.length) {
        return {
            pass: false,
            message: () =>
                `Missing expected items: ${this.utils.printExpected(missingItemList)}. \n` +
                print(),
        };
    }

    return {
        pass: true,
        message() {
            return 'The received array matches the expected array.';
        },
    };
};
