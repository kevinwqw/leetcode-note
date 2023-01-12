class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next || null;
    }
}

/**
 * leetCode index: 206
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseLinkList = (head) => {
    let temp = null;
    let pre = null;
    let cur = head;
    while (cur) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }

    return pre;
};
