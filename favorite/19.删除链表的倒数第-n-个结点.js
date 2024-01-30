/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return head // 注意裁枝
  const vHead = new ListNode(0, head)
  let fast = vHead
  let slow = vHead
  while (n--) fast = fast.next
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next

  return vHead.next
}
// @lc code=end
