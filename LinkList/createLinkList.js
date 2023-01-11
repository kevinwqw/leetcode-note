/**
 * leetCode index: 707
 *
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var LinkNode = function (val, next) {
    this.val = val;
    this.next = next || null;
};

var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;

    let indexNode = this.head;
    while (index) {
        indexNode = indexNode.next;
        index--;
    }
    return indexNode.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new LinkNode(val, this.head);
    this.head = newNode;
    if (!this.size) this.tail = newNode;
    this.size += 1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new LinkNode(val);
    if (!this.size) {
        this.head = newNode;
    } else {
        this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size += 1;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) {
        return;
    } else if (index === 0) {
        this.addAtHead(val);
    } else if (index === this.size) {
        this.addAtTail(val);
    } else {
        let preNode = this.head;
        while (index > 1) {
            preNode = preNode.next;
            index--;
        }
        let newNode = new LinkNode(val, preNode.next);
        preNode.next = newNode;
        this.size += 1;
    }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size || !this.size) return;
    if (!index) {
        this.head = this.head.next;
        this.size -= 1;
        return;
    }

    let preNode = this.head;
    while (index > 1) {
        preNode = preNode.next;
        index--;
    }
    if (preNode.next === this.tail) {
        this.tail = preNode;
    }
    preNode.next = preNode.next.next;
    this.size -= 1;
};
