/**
 * Leetcode index: 344
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
    let start = 0;
    let end = s.length;
    let temp = null;
    while (start < end) {
        temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
};
