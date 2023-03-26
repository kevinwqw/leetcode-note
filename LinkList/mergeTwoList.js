class ListNode {
    constructor(val, next) {
        this.val = val || 0;
        this.next = next || null;
    }
}
/**
 * leetCode index: 21
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoList = (l1, l2) => {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    } else if (l1.val <= l2.val) {
        l1.next = mergeTwoList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoList(l1, l2.next);
        return l2;
    }
};
