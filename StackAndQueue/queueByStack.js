/**
 * Leetcode index: 232
 *
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class QueueByStack {
    constructor() {
        this.stackIn = [];
        this.stackOut = [];
    }

    push(val) {
        this.stackIn.push(val);
    }

    pop() {
        if (this.stackOut.length) return this.stackOut.pop();
        while (this.stackIn.length) this.stackOut.push(this.stackOut.pop());
        return this.stackOut.pop();
    }

    peek() {
        const firstElem = this.pop();
        this.stackOut.push(firstElem);
        return firstElem;
    }

    empty() {
        return !this.stackIn.length && !this.stackOut.length;
    }
}
