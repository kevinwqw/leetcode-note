/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length <= 1) return 0
  let max_water = 0

  for (let i = 1; i < height.length - 1; i++) {
    let l_max = 0,
      r_max = 0,
      l = i - 1,
      r = i + 1
    // 计算 i 左侧最高值
    while (l >= 0) {
      l_max = Math.max(l_max, height[l])
      l--
    }
    // 计算 i 右侧最高值
    while (r < height.length) {
      r_max = Math.max(r_max, height[r])
      r++
    }

    const water = Math.min(l_max, r_max) - height[i]
    // 注意负值
    if (water > 0) max_water += water
  }

  return max_water
}
// @lc code=end
