/**
 *
 * @param {Array} arr
 * @return {Array}
 */
const readOddAndEven = (arr) => {
    const res = [];
    arr.forEach((item, index) => {
        // odd
        if (index % 2 === 0) {
            res.push(item.filter((ele, i) => i % 2 === 0));
        } else {
            res.push(item.filter((ele, i) => i % 2 !== 0));
        }
    });

    return res;
};
