/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length <= 1) return [nums] // 注意返回的值是二维数组 此处要用[]包装

  const res = []
  const path = []
  const used = []
  backTracking(nums, res, path, used)

  return res
}

const backTracking = (data, res, path, used) => {
  // 递归结束条件
  if (path.length === data.length) {
    res.push([...path])
    return
  }

  // 循环横向遍历
  for (let i = 0; i < data.length; i++) {
    if (used[i]) continue
    used[i] = true
    path.push(data[i])
    // 递归纵向遍历
    backTracking(data, res, path, used)
    path.pop()
    used[i] = false
  }
}
// @lc code=end
