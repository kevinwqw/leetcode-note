/**
 * Leetcode index: 541
 *
 * input: s = "abcdefg", k = 2
 * output: "bacdfeg"
 *
 * @param {string} str
 * @param {number} k
 * @return {string}
 */
const reverseStrByStep = (str, k) => {
    const len = str.length;
    const strArr = str.split('');
    for (let i = 0; i < len; i += 2 * k) {
        let l = i;
        let r = i + k - 1 > len ? len - 1 : i + k - 1;
        while (l < r) {
            [strArr[l], strArr[r]] = [strArr[r], strArr[l]];
            l++;
            r--;
        }
    }

    return strArr.join('');
};
