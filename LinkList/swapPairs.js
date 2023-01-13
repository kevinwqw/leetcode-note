class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * leetCode index: 24
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
    if (!head || !head.next) return head;
    let vNode = new ListNode(0, head);
    let temp = vNode;
    while (temp.next && temp.next.next) {
        let pre = temp.next;
        let cur = temp.next.next;
        pre.next = cur.next;
        cur.next = pre;
        temp.next = cur;
        temp = pre;
    }

    return vNode.next;
};
