/**
 * @param {string} str
 * @return {string}
 */

const removeDuplicates = (str) => {
    const stack = [];
    for (const s of str) {
        if (!stack.length) stack.push(s);
        const topElem = stack.pop();
        if (s === topElem) continue;
        stack.push(topElem);
        stack.push(s);
    }

    return stack.join('');
};
