/**
 * class method
 * 使用2个队列
 */

class stackByQueue {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(elem) {
        this.queue1.push(elem);
    }

    pop() {
        // 如果队列1为空，则用队列二回填队列一
        if (!this.queue1.length) {
            [this.queue1, this.queue2] = [this.queue2, this.queue1];
        }
        // 如果队列1不为空，则取出除尾元素外的全部元素，用队列2备份
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        // 出队队列1仅剩的最后一个元素，即队尾元素
        return this.queue1.shift();
    }

    // 查看元素 但不移除，先取，再入
    top() {
        const topElem = this.pop();
        this.queue1.push(topElem);
        return topElem;
    }

    empty() {
        return !this.queue1.length && !this.queue2.length;
    }
}

/**
 * Function method
 * 使用一个队列
 */

function stackByQueue() {
    this.queue = [];
}

stackByQueue.prototype.push = function (elem) {
    this.queue.push(elem);
};

stackByQueue.prototype.pop = function () {
    let size = this.queue.length;
    while (size-- > 1) {
        this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
};

stackByQueue.prototype.top = function () {
    const topElem = this.pop();
    this.queue.push(topElem);
    return topElem;
};

stackByQueue.prototype.empty = function () {
    return !this.queue.length;
};
