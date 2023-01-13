class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Leetcode index: 142
 *
 * @param {Listnode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
    if (!head || !head.next) return null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (fast !== slow) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }

    return null;
};
