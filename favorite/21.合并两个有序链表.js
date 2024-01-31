/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const vHead = new ListNode(0)
  let temp = vHead
  // (易错) 注意要判断list1或list2是否存在，而不是list1.next和list2.next是否存在
  while (list1 || list2) {
    // 若list1不存在，则后面节点为当前剩余的list2
    if (!list1) {
      temp.next = list2
      break
    }

    if (!list2) {
      temp.next = list1
      break
    }

    if (list1.val < list2.val) {
      temp.next = list1
      list1 = list1.next
    } else {
      temp.next = list2
      list2 = list2.next
    }

    temp = temp.next
  }

  return vHead.next
}
// @lc code=end
