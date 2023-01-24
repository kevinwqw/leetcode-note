/**
 * @param {Array} arr
 * @return {Array}
 */
const insertSort = (arr) => {
    /**
     * arr原始无序数组
     * 部分有序数组，前n个元素为有序，n+1向n中插入，将n+1元素逐个与n中的有序数组进行对比，直到找到n+1元素所在位置
     */

    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i];
        let j = i - 1;
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
};
