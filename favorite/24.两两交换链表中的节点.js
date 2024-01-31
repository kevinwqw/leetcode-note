/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const vHead = new ListNode(0, head)
  let temp = vHead
  while (temp.next && temp.next.next) {
    let pre = temp.next
    let cur = temp.next.next
    // 链接顺序要注意，先1->3 再 2->1 再 vNode ->2
    pre.next = cur.next
    cur.next = pre
    temp.next = cur
    // 完成交换后，调整下次要交换的vNode起点位置
    temp = cur.next
  }

  return vHead.next
}
// @lc code=end
