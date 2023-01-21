/**
 * Leetcode index: 5
 *
 * @param {string} str
 * @return {string}
 */
const replaceSpace = (str) => {
    return srt.replace(/[' ']/g, '%20');
};

/**
 * solution2
 *
 * @param {string} str
 * @return {string}
 */
const replaceSpaceWithWord = (str) => {
    const strArr = str.split('');
    const len = strArr.length;

    let totalSpace = 0;
    strArr.forEach((str) => {
        if (str === ' ') totalSpace++;
    });

    let left = len - 1;
    let right = len + 2 * totalSpace - 1;
    while (left < right) {
        if (strArr[left] === ' ') {
            strArr[right--] = '0';
            strArr[right--] = '2';
            strArr[right--] = '%';
        } else {
            strArr[right--] = strArr[left--];
        }
    }

    return strArr.join('');
};
