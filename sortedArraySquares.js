/**
 * leetCode index: 977
 *
 * input: [-4,-1,0,3,10]
 * output: [0,1,9,16,100]
 *
 * @param {number []} arr
 * @return {number []}
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

/**
 * input: [-4,-1,0,3,10]
 * output: [0,1,9,16,100]
 *
 * @param {number []} arr
 * @return {number []}
 */
const sortedArraySquare2 = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    const res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const leftSquare = arr[left] * arr[left];
        const rightSquare = arr[right] * arr[right];
        if (leftSquare > rightSquare) {
            res[i] = leftSquare;
            left++;
        } else {
            res[i] = rightSquare;
            right--;
        }
    }
    return res;
};
