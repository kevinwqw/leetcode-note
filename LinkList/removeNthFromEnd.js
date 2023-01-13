class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Leetcode index: 19
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    if (!head) return head;
    let vNode = new ListNode(0, head);
    let fast = vNode;
    let slow = vNode;
    while (n--) fast = fast.next;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;

    return vNode.next;
};
