/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0
  const arr = []

  for (let char of s) {
    while (arr.includes(char)) {
      arr.shift()
    }

    arr.push(char)
    maxLen = Math.max(arr.length, maxLen)
  }

  return maxLen
}
// @lc code=end
