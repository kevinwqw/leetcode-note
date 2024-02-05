/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0
  let max = nums[0] // 记录历史最高值
  nums.forEach((num) => {
    pre = Math.max(pre + num, num) //关键步骤，pre有正向增益则保留，无增益从当前num重新开始统计
    max = Math.max(pre, max)
  })

  return max
}
// @lc code=end
