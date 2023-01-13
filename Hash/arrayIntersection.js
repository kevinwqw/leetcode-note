/**
 * Leetcode index: 349
 *
 * input: arr1 = [1,2,2,1], arr2 = [2,2]
 * output: [2]
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const arrayInterSection = (arr1, arr2) => {
    const len1 = arr1.length;
    const len2 = arr2.length;
    const largerArray = len1 < len2 ? arr2 : arr1;
    const smallerArray = len1 < len2 ? arr1 : arr2;
    const largerSet = new Set(largerArray);
    const res = new Set();
    smallerArray.forEach((item) => {
        if (largerSet.has(item)) res.add(item);
    });

    return Array.from(res);
};
