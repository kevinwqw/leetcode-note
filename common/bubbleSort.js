/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
const bubbleSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
};
