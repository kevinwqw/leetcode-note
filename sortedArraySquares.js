/**
 * @param {Array} arr
 * @return {Array}
 */

const sortedArraySquare = (arr) => {
    const len = arr.length;
    if (len === 0) return arr;
    const resArr = new Array(len).fill(0);
    let leftIndex = 0;
    let rightIndex = len - 1;
    while (leftIndex < rightIndex) {
        const leftSquare = arr[leftIndex] * arr[leftIndex];
        const rightSquare = arr[rightIndex] * arr[rightIndex];
        if (leftSquare < rightSquare) {
            resArr[rightIndex--] = rightSquare;
        } else {
            resArr[rightIndex] = leftSquare;
            leftIndex++;
        }
    }
    return resArr;
};
