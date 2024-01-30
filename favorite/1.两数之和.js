/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const m = new Map()
  for (let [index, num] of Object.entries(nums)) {
    if (m.get(target - num)) return [m.get(target - num), index]
    m.set(num, index)
  }
}
// @lc code=end
