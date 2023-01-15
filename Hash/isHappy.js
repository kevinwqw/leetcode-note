/**
 * Leetcode index: 202
 *
 * input: n = 19
 * output: true
 *
 *
 * 1² + 9² = 82
 * 8² + 2² = 68
 * 6² + 8² = 100
 * 1² + 0² + 0² = 1
 *
 * @param {number} n
 * @return {boolean}
 */

const isHappy = (n) => {
    let cur = n;
    let sum = 0;
    const record = new Set();
    while (sum !== 1) {
        sum = `${cur}`.split('').reduce((total, num) => {
            return total + num ** 2;
        }, 0);
        if (record.has(sum)) return false;
        record.add(sum);
        cur = sum;
    }

    return true;
};
