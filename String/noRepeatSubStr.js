/**
 * leetCode index: 3
 *
 * @param {string} s
 * @returns {number}
 */
const noRepeatSubStr = (s) => {
    let maxLength = 0;
    const arr = [];
    for (let str of s) {
        while (arr.includes(str)) {
            arr.shift();
        }

        arr.push(str);
        maxLength = Math.max(maxLength, arr.length);
    }

    return maxLength;
};
