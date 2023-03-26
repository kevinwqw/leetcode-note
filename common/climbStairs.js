/**
 * leetcode index: 70
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    if (n <= 2) return n;
    let fn = 2;
    let fn_1 = 1;
    let fn_2 = 2;
    for (let i = 3; i <= n; i++) {
        fn_2 = fn_1;
        fn_1 = fn;
        fn = fn_1 + fn_2;
    }

    return fn;
};
