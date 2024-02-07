/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = []
  let offset = 1
  let c_start = 0
  let r_start = 0
  let totalRow = matrix.length
  let totalCol = matrix[0].length

  while (offset < totalRow && (totalRow !== offset + 1 || totalCol !== offset + 1)) {
    for (let c = c_start; c < totalCol - offset; c++) {
      res.push(matrix[r_start][c])
      c_start++
    }

    for (let r = r_start; r < totalRow - offset; r++) {
      res.push(matrix[r][c_start])
      r_start++
    }

    for (let c = c_start; c > offset - 1; c--) {
      res.push(matrix[r_start][c])
      c_start--
    }

    for (let r = r_start; r > offset - 1; r--) {
      res.push(matrix[r][c_start])
      r_start--
    }

    c_start = offset
    r_start = offset
    offset++
  }

  if (totalRow === offset + 1 && totalCol > offset + 1) {
    for (let c = c_start; c < totalCol - offset + 1; c++) {
      res.push(matrix[r_start][c])
    }
  }

  if (totalCol === offset + 1 && totalRow > offset + 1) {
    for (let r = r_start; r < totalRow - offset + 1; r++) {
      res.push(matrix[r][c_start])
    }
  }

  return res
}
// @lc code=end
