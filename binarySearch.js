/**
 * leetCode index: 704
 *
 * BinarySearch Condititon
 * 1. arr has order
 * 2. no repeat element
 * T-complexity O(Log2N)
 *
 * @param {Array} arr
 * @param {any} target
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
const search = (arr, target, left, right) => {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return search(arr, target, mid + 1, right);
    if (target < arr[mid]) return search(arr, target, left, mid - 1);
};

const bSearch = (arr, target) => {
    return search(arr, target, 0, arr.length - 1);
};
