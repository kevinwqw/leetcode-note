/**
 * leetCode index: 27
 * 
 * @param {Array} arr
 * @param {number} val
 * @return {Array}
 */
const removeElem = (arr, target) => {
    const resArr = [];
    const len = arr.length;
    let slowIndex = 0;
    let fastIndex = 0;
    while (fastIndex < len) {
        if (arr[fastIndex] === target) {
            fastIndex++;
        } else {
            resArr[slowIndex++] = arr[fastIndex++];
        }
    }
    return resArr.length;
};
