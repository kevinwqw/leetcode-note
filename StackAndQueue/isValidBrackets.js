/**
 * Leetcode index: 20
 *
 * @param {string} str
 * @return {boolean}
 */
const isValidBracket = (str) => {
    const mapping = { '(': ')', '{': '}', '[': ']' };
    const strArr = str.split('');
    const stack = [];
    // Do not use forEach!, 'return' could not stop the loop
    for (const s of strArr) {
        if (s === '(' || s === '{' || s === '[') {
            stack.push(mapping[s]);
        }

        if ((s === ')' || s === '}' || s === ']') && stack.pop() !== s) return false;
    }

    return !stack.length;
};
