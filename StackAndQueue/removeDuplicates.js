/**
 * Leetcode index: 1047
 *
 * @param {string} str
 * @return {string}
 */
const removeDuplicates = (str) => {
    const stack = [];
    for (const s of str) {
        if (!stack.length) {
            stack.push(s);
            continue;
        }
        const topElem = stack.pop();
        if (topElem !== s) {
            stack.push(topElem);
            stack.push(s);
        }
    }

    return stack.join('');
};
