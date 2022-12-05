class Heap {
    constructor(compareFn) {
        this.queue = [];
        this.compareFn = compareFn;
    }

    // 推入并上浮
    push(value) {
        this.queue.push(value);
        let index = this.queue.length - 1;
        let parent = Math.floor((index - 1) / 2); // 推入节点的父节点下标

        // 构建小顶堆，堆内数据从小到大排列
        while (parent >= 0 && this.compare(parent, index) > 0) {
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    // 移除并下沉
    pop() {
        const firstElem = this.queue[0];
        this.queue[0] = this.queue.pop();
        let index = 0; // 下沉元素下标
        let left = 1;
        let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        while (searchChild !== undefined && this.compare(index, searchChild)) {
            [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]];

            index = searchChild;
            left = 2 * index + 1;
            searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        }

        return firstElem;
    }

    size() {
        return this.queue.length;
    }

    compare(index1, index2) {
        if (this.queue[index1] === undefined) return 1;
        if (this.queue[index2] === undefined) return -1;
        return this.compareFn(this.queue[index1], this.queue[index2]);
    }
}

/**
 * @param {number []} nums
 * @param {number} k
 * @return {number []}
 */
const topKFrequent = (nums, k) => {
    const mapData = new Map();

    for (const num of nums) {
        // 如果元素出现过，则该元素的统计次数+1，保存为值
        mapData.set(num, (mapData.get(num) || 0) + 1);
    }

    // a[1]和b[1]分别获取Map对象中一组键值的值进行比较，即对比元素出现次数
    const heap = new Heap((a, b) => a[1] - b[1]);

    for (const entry of mapData.entries()) {
        heap.push(entry); // push的时候会排序

        if (heap.size() > k) {
            heap.pop();
        }
    }

    const res = [];

    for (let i = heap.size() - 1; i >= 0; i--) {
        res[i] = heap.pop()[0]; // 取出对应Map对象一组键值中的键，即被统计的元素值
    }

    return res;
};
