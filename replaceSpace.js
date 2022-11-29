// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
// 示例 1： 输入：s = "We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} str
 * @return {string}
 */

const replaceSpace = (str) => {
    const strArr = Array.from(str);
    const len = strArr.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (strArr[i] === ' ') {
            count++;
        }
    }
    let left = len - 1;
    let right = len + 2 * count - 1;
    while (left >= 0) {
        if (strArr[left] === ' ') {
            strArr[right] = '0';
            strArr[--right] = '2';
            strArr[--right] = '%';
            left--;
        } else {
            strArr[right--] = strArr[left--];
        }
    }

    return strArr.join('');
};
