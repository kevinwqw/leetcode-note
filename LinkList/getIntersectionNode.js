class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * leetCode index: 02.07
 * 
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null;
    let sizeA = 0;
    let sizeB = 0;
    let tempA = headA;
    let tempB = headB;
    while (tempA) {
        tempA = tempA.next;
        sizeA += 1;
    }
    while (tempB) {
        tempB = tempB.next;
        sizeB += 1;
    }

    let gapLen = Math.abs(sizeA - sizeB);
    let longCurNode = sizeA > sizeB ? headA : headB;
    let shortCurNode = sizeA > sizeB ? headB : headA;
    while (gapLen--) longCurNode = longCurNode.next;
    let shortListSize = Math.min(sizeA, sizeB);
    while (shortListSize--) {
        if (longCurNode === shortCurNode) return longCurNode;
        longCurNode = longCurNode.next;
        shortCurNode = shortCurNode.next;
    }
    return null;
};
