/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  if (i >= 0) {
    let j = nums.length - 1
    // 易错：注意nums[i] 与nums[j]相等的情况
    while (i < j && nums[i] >= nums[j]) {
      j--
    }

    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  let l = i + 1
  let r = nums.length - 1
  while (l < r) {
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
}
// @lc code=end
