/**
 * Leetcode index: 225
 *
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

class StackByQueue {
    constructor() {
        this.queue = [];
        this.backupQueue = [];
    }

    push(val) {
        this.queue.push(val);
    }

    pop() {
        if (!this.queue.length) [this.queue, this.backupQueue] = [this.backupQueue, this.queue];
        while (this.queue.length > 1) this.backupQueue.push(this.queue.shift());
        return this.queue.shift();
    }

    top() {
        const topElem = this.pop();
        this.queue.push(topElem);
        return topElem;
    }

    empty() {
        return !this.queue.length && !this.backupQueue.length;
    }
}
