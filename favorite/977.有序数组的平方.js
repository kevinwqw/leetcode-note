/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let l = 0
  let r = nums.length - 1
  const res = []

  while (l <= r) {
    const squareL = nums[l] * nums[l]
    const squareR = nums[r] * nums[r]
    if (squareL < squareR) {
      res.push(squareR)
      r--
    } else {
      res.push(squareL)
      l++
    }
  }

  return res.reverse()
}
// @lc code=end
