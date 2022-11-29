// 给定一个字符串，逐个翻转字符串中的每个单词。

// 示例 1：
// 输入: "the sky is blue"
// 输出: "blue is sky the"

// 示例 2：
// 输入: "  hello world!  "
// 输出: "world! hello"
// 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

// 示例 3：
// 输入: "a good   example"
// 输出: "example good a"
// 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

/**
 *
 * @param {Array} strArr
 * @return {Array}
 */
const removeExtraSpace = (strArr) => {
    const len = strArr.length;
    let slowIndex = 0;
    let fastIndex = 0;
    while (fastIndex < len) {
        if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
            fastIndex++;
        } else {
            strArr[slowIndex++] = strArr[fastIndex++];
        }
    }
};

/**
 * @param {Array} strArr
 * @param {number} start
 * @param {number} end
 * @return {Array}
 */
const reverseArrayElem = (strArr, start, end) => {
    let left = start;
    let right = end;
    while (left < right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }
};

/**
 * @param {string} str
 * @return {string}
 */
const reverseWords = (str) => {
    const strArr = Array.from(str);
    removeExtraSpace(strArr);
    // 翻转整个字符串
    reverseArrayElem(strArr, 0, strArr.length - 1);
    // 翻转每个单词
    let start = 0;
    for (let i = 0; i <= strArr.length; i++) {
        if (strArr[i] === ' ' && i === strArr.length) {
            reverseArrayElem(strArr, start, i - 1); //空各位不翻转i -1
            start = i + 1; //新起点从空格位后一位开始
        }
    }

    return strArr.join('');
};
