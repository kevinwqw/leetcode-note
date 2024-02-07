/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  backTracking(n, k, res, [], 1)
  return res
}

const backTracking = (n, k, res, path, startIndex) => {
  // 叶子结点终止条件
  if (path.length === k) {
    res.push([...path])
    return
  }

  for (let i = startIndex; i <= n; i++) {
    path.push(i)
    backTracking(n, k, res, path, i + 1)
    path.pop()
  }
}
// @lc code=end

/**
 * 回溯算法模版
 *
 * function backtracking(参数) {
 *   if (终止条件) {
 *     存放结果;
 *     return;
 *   }
 *
 *   for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
 *   处理节点;
 *   backtracking(路径，选择列表); // 递归
 *   回溯，撤销处理结果
 *}
 * }
 */
