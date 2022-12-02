/**
 * 用stack实现queue
 * class QueueByStack
 */
class QueueByStack {
    constructor() {
        this.stackIn = [];
        this.stackOut = [];
    }

    push(elem) {
        this.stackIn.push(elem);
    }

    pop() {
        const size = this.stackOut.length;
        if (size) {
            return this.stackOut.pop();
        }
        while (this.stackIn.length) {
            this.stackOut.push(this.stackIn.pop());
        }
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

/**
 * Function method
 */

function QueueByStack() {
    this.stackIn = [];
    this.stackOut = [];
}

QueueByStack.prototype.push = function (elem) {
    this.stackIn.push(elem);
};

QueueByStack.prototype.pop = function () {
    if (this.stackOut.length) return this.stackOut.pop();
    while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop();
};

QueueByStack.prototype.peek = function () {
    const firstElem = this.pop();
    this.stackOut.push(firstElem);
    return firstElem;
};

QueueByStack.prototype.empty = function () {
    return !this.stackIn.length && !this.stackOut.length;
};
