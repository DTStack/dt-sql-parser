namespace jest {
    interface Matchers<R = void, T = {}> {
        /**
         * @description
         * Check whether two arrays are equal without considering the order of items.
         *
         * Make sure expected array has no duplicate item.
         *
         * Every item must be primitive type, like string, number, etc.
         *
         * @example
         * expect(['a', 'b']).toMatchUnorderedArray(['b', 'a']) // pass
         * expect(['b', 'a']).toMatchUnorderedArray(['c', 'b', 'a']) // not pass, missing item 'c'
         */
        toMatchUnorderedArray(expected: unknown[]): R;
    }
}
