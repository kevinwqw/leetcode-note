/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0
  let sum = 0
  let res = Infinity
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      res = Math.min(res, j - i + 1)
      sum -= nums[i++]
    }
  }

  return res === Infinity ? 0 : res
}
// @lc code=end
