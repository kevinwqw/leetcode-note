/**
 *
 * @param {Array} arr
 * @param {number} val
 * @return {Array}
 */
const removeElem = (arr, val) => {
    const resArr = [];
    const len = arr.length;
    let slowIndex = 0;
    let fastIndex = 0;
    while (fastIndex < len) {
        if (arr[fastIndex] === val) {
            fastIndex++;
        } else {
            resArr[slowIndex++] = arr[fastIndex++];
        }
    }
    return resArr.length;
};
