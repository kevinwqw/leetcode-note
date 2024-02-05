/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  let mid

  while (l <= r) {
    mid = l + ((r - l) >> 1)

    if (nums[mid] === target) return mid

    if (nums[mid] >= nums[l]) {
      // 左侧升序, 在单调区间内使用二分查找
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      // 右侧升序, 在单调区间内使用二分查找
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return -1
}
// @lc code=end
