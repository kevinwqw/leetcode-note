/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = []
  // 先排序可以剪枝
  nums.sort((a, b) => a - b) // sort会改变元数组，不用重新创建变量
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res // 剪枝
    if (i > 0 && nums[i] === nums[i - 1]) continue // (易漏)去重

    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r] // sum在while内，坐标变时要重置
      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        res.push([nums[i], nums[l], nums[r]]) // 先赋值，再去重
        // 注意这里去重的条件是: 左右指针与它们下个位置对比，而不是上一个位置对比，若重复，则不考虑当前值，而用下一个位置的值
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      }
    }
  }

  return res
}
// @lc code=end
