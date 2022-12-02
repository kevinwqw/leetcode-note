/**
 * @param {string} str
 * @return {boolean}
 */

const isValidBrackets = (str) => {
    const stack = [];
    const mapping = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    // 字符串也可以使用for(s of str)
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{' || str[i] === '(' || str[i] === '[') {
            stack.push(str[i]);
            continue;
        }
        if (str[i] !== mapping[stack.pop()]) return false;
    }
    //结束遍历，如果stack为空，则说明全匹配
    return !stack.length;
};
