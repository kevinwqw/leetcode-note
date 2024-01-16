/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const bSearch = (nums, target, l, r) => {
  if (r < l) return -1;

  let mid = Math.floor((l + r) / 2);
  if (nums[mid] === target) return mid;
  if (nums[mid] < target) return bSearch(nums, target, mid + 1, r);
  if (nums[mid] > target) return bSearch(nums, target, l, mid - 1);
};

var search = function (nums, target) {
  return bSearch(nums, target, 0, nums.length - 1);
};
// @lc code=end
