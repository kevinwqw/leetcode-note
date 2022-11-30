// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

// 示例 1：
// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"

// 示例 2：
// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"

// 限制：
// 1 <= k < s.length <= 10000

/**
 * @param {Array} strArr
 * @param {int} start
 * @param {int} end
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
 *
 * @param {string} str
 * @param {int} k
 * @return {string}
 */
const reverseLeftWords = (str, k) => {
    const strArr = Array.from(str);
    const len = strArr.length;
    reverseArrayElem(strArr, 0, k);
    reverseArrayElemz(strArr, k + 1, len - 1);
    reverseArrayElem(strArr, 0, len - 1);
    return strArr.join('');
};