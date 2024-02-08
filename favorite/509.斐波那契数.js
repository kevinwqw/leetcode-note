/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 递归
var fib = function (n) {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

// @lc code=end

// 动态规划
const fib = (n) => {
  if (n < 2) return n

  const dp = []
  dp[0] = 0
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}
