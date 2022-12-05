class MonoQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        let lastElem = this.queue[this.queue.length - 1];
        // 从尾部开始遍历移除单项队列中小于value的元素
        while (lastElem < value) {
            this.queue.pop();
            lastElem = this.queue[this.queue.length - 1];
        }
        this.queue.push(value);
    }

    dequeue(value) {
        if (this.queue.length && this.front() === value) {
            this.queue.shift();
        }
    }

    front() {
        return this.queue[0];
    }
}

/**
 * @param {number []} nums
 * @param {number} k
 * @return {number []}
 */

const maxSlidingWindow = (nums, k) => {
    const monoQueue = new MonoQueue();
    let i = 0;
    let j = 0;
    const resArr = [];
    // 初始化，先完成首次入队
    while (j < k) {
        monoQueue.enqueue([j++]);
    }
    resArr.push(monoQueue.front());
    while (j < nums.length) {
        monoQueue.dequeue(nums[i]);
        monoQueue.enqueue([nums[j]]);
        resArr.push(monoQueue.front());
        i++;
        j++;
    }
    return resArr;
};
