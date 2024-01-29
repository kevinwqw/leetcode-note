/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var LinkNode = function (val, next) {
  this.val = val
  this.next = next || null
}

var MyLinkedList = function () {
  this.head = null
  this.tail = null
  this.size = 0
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || this.size < index + 1) return -1

  let temp = this.head
  while (index--) {
    temp = temp.next
  }

  return temp.val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new LinkNode(val, this.head)
  this.head = newNode
  this.size += 1
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new LinkNode(val)
  if (this.size > 0) {
    this.tail.next = newNode
  } else {
    this.head = newNode
  }

  this.size += 1
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || this.size < index + 1) return

  if (index === 0) {
    this.addAtHead(val)
  } else if (index === this.size) {
    this.addAtTail(val)
  } else {
    let temp = this.head
    while (index--) {
      temp = temp.next
    }
    const newNode = new LinkNode(val, temp.next.next)
    temp.next = newNode
    this.size += 1
  }
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || this.size < index + 1 || !this.size) return

  if (index === 0) {
    this.head = this.head.next
  } else {
    let temp = this.head
    while (index > 1) {
      temp = temp.next
      index--
    }
    temp.next = temp.next.next
  }

  this.size -= 1
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
