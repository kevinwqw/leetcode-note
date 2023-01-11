class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next || null;
    }
}

/**
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeLinkListElem = (head, val) => {
    let preHeadNode = new ListNode(0, head);
    let current = preHeadNode;
    while (current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
            continue;
        }
        current = current.next;
    }

    return preHeadNode.next;
};
