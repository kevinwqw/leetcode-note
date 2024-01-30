/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = []
  if (nums.length < 4) return res

  nums.sort((a, b) => a - b) // sort会改变元素数组，不用重新创建变量

  // 注意i最大范围
  for (let i = 0; i < nums.length - 3; i++) {
    /**
     * 1. 注意 i - 1 不能越界, 要移动过一次后再判断
     * 2. (易错点) 对比是用cur与pre对比，不是next， 因为内部循环使用的是cur，不是next
     */
    if (i > 0 && nums[i] === nums[i - 1]) continue // 这里由于是for循环，一次loop结束后i会自增，直接continue
    // 注意j最大范围
    for (let j = i + 1; j < nums.length - 2; j++) {
      // 注意j - 1不能越界, 要移动过一次后再判断
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      let l = j + 1
      let r = nums.length - 1
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum < target) {
          l++
        } else if (sum > target) {
          r--
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while (l < r && nums[l] === nums[l + 1]) l++
          while (l < r && nums[r] === nums[r - 1]) r--
          l++
          r--
        }
      }
    }
  }

  return res
}
// @lc code=end
