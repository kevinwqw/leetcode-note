/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// 该方法时间复杂度O(n²) 用例执行超时
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

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
  const len = height.length
  if (len <= 2) return 0

  let max_water = 0

  const l_max = new Array(len).fill(0) // 记录每个位置左侧最大高度
  let l = 1 // 无需计算位置0，直接使用默认高度0
  while (l < len) {
    // 易错关键点：当前位置的左侧的最大高度为：‘当前位置左侧元素’ 与 ‘当前位置左侧元素的左侧最大值’ 中较大的
    l_max[l] = Math.max(height[l - 1], l_max[l - 1])
    l++
  }

  const r_max = new Array(len).fill(0) // 记录每个位置右侧最大高度
  let r = len - 2 // 无需计算位置len - 1，直接使用默认高度0
  while (r >= 0) {
    r_max[r] = Math.max(height[r + 1], r_max[r + 1])
    r--
  }

  for (let i = 1; i < len - 1; i++) {
    const water = Math.min(l_max[i], r_max[i]) - height[i]

    if (water > 0) max_water += water
  }

  return max_water
}

// @lc code=end
