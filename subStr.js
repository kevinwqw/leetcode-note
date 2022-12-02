// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 示例 1: 输入: haystack = "hello", needle = "ll" 输出: 2

// 示例 2: 输入: haystack = "aaaaa", needle = "bba" 输出: -1

/**
 * @param {string} str
 * @param {Array}
 */
const getNext = (str) => {
    let next = []; // 初始化最小相等前后缀数组
    let j = 0; // j指向前缀末尾
    next.push(j); // 初始化next首位

    //若str[i] = str[i]相等，同时右移，若不等，回退j
    for (let i = 1; i < str.length; i++) {
        // j从1开始比较
        while (j > 0 && str[i] !== str[j]) {
            j = next[j - 1];
        }
        if (str[i] === str[j]) {
            j++; // 右移
        }
        next.push(j); // 每次操作都给next数组赋值
    }
    return next;
};

/**
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const subStr = (haystack, needle) => {
    if (needle.length === 0) return 0;
    let next = getNext(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }
        if (haystack[i] === needle[j]) j++;
        // i是当前文本串匹配位置的index，减去模式串长度
        if (j === needle.length) return i + 1 - needle.length;

        return -1;
    }
};
