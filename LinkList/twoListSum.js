class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = nextl;
    }
}

/**
 * leetCode index: 2
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
const twoListSum = (l1, l2) => {
    const pre = new ListNode(0);
    let cur = pre;
    let carry = 0;
    while (l1 || l2) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        const sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry) cur.next = new ListNode(carry);

    return pre.next;
};
