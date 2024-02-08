/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = []
  dp[0] = 0
  dp[1] = 0
  for (let i = 2; i <= cost.length; i++) {
    // 从 i-1 跳到 i 的花费是const[i-1], 那么dp[i] = dp[i -1] + cost[i - 1], 同理 i - 2, 取两者花费最小的
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  return dp[cost.length]
}
// @lc code=end
