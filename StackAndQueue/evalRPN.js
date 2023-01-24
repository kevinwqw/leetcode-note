/**
 * Leetcode index: 150
 *
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
    const stack = [];
    const mapping = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };

    for (const s of tokens) {
        if (Object.keys(mapping).indexOf(s) === -1) {
            stack.push(Number(s));
            continue;
        }
        const b = stack.pop();
        const a = stack.pop();
        stack.push(Number(mapping[s](a, b)));
    }

    return stack.pop();
};
