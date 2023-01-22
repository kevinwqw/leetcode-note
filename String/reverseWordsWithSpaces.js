/**
 * @param {string} word
 * @return {string}
 */
const reverseWord = (word) => {
    const wordArr = word.split('');
    let l = 0;
    let r = wordArr.length - 1;
    while (l < r) {
        [wordArr[l], wordArr[r]] = [wordArr[r], wordArr[l]];
        l++;
        r--;
    }

    return wordArr.join('');
};

const removeSpaces = (str) => {
    const strArr = str.split('');
    const len = strArr.length;
    let slow = 0;
    let fast = 0;
    while (fast < len) {
        if (strArr[fast] === ' ' && (fast === 0 || strArr[fast] === strArr[fast - 1])) {
            fast++;
        } else {
            strArr[slow++] = strArr[fast++];
        }
    }

    strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow;

    return strArr.join('');
};

/**
 * Leetcode index: 151
 *
 * @param {string} str
 * @return {string}
 */
const reverseWordsWithSpaces = (str) => {
    let stdStr = removeSpaces(str);
    const stdStrArr = stdStr.split('');

    let start = 0;
    let end = stdStrArr.length - 1;
    while (start < end) {
        [stdStrArr[start], stdStrArr[end]] = [stdStrArr[end], stdStrArr[start]];
        start++;
        end--;
    }

    const res = stdStrArr
        .join('')
        .split(' ')
        .map((word) => {
            return reverseWord(word);
        });

    return res.join(' ');
};
