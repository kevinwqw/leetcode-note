/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  const stack = []
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
    } else if (stack.pop() !== mapping[char]) {
      return false
    }
  }

  return stack.length === 0
}
// @lc code=end
