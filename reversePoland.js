/**
 * @param {string} str
 * @return {number}
 */

const reversePoland = (str) => {
    const stack = [];
    const mapping = new Map([
        ['+', (x, y) => x + y],
        ['-', (x, y) => x - y],
        ['*', (x, y) => x * y],
        ['/', (x, y) => x / y]
    ]);

    for (const s of str) {
        if (!mapping.has(s)) {
            stack.push(s);
            continue;
        }
        stack.push(mapping.get(s)(stack.pop(), stack.pop()));
    }
    return stack.pop();
};
