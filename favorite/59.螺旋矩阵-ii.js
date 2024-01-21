/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 1) return [[1]]

  let startX = 0
  let startY = 0
  let loop = Math.floor(n / 2)
  let val = 1
  let offset = 1
  const matrix = new Array(n).fill(0).map((item) => new Array(n).fill(0))

  while (loop--) {
    let c = startX
    let r = startY
    for (; c < n - offset; c++) {
      matrix[r][c] = val++
    }

    for (; r < n - offset; r++) {
      matrix[r][c] = val++
    }

    for (; startX < c; c--) {
      matrix[r][c] = val++
    }

    for (; startY < r; r--) {
      matrix[r][c] = val++
    }

    startX++
    startY++
    offset++
  }

  if (n % 2 === 1) {
    const centerIndex = Math.floor(n / 2)
    matrix[centerIndex][centerIndex] = val
  }

  return matrix
}
// @lc code=end
