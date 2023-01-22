/**
 * Leetcode index: 58
 *
 * @param {string} str
 * @param {number} n
 * @return {string}
 */
const reverseLeftWords = (str, n) => {
    const strArr = s.split('');
    const left = [];
    const right = [];
    let i = 0;
    while (i < n) left.push(strArr[i++]);
    let j = n;
    while (j < s.length) right.push(strArr[j++]);

    return [...right, ...left].join('');
};
