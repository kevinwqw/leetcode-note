/**
 * @param {Array} arr
 * @return {Array}
 */
const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[0] < arr[i]) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    return [...quickSort(left), arr[0], ...quickSort(right)];
};
