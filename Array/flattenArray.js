/**
 *
 * @param {Array} arr
 * @return {Array}
 */
const flattenArray = (arr) => {
    const res = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            res.push(...flattenArray(item));
        } else {
            res.push(item);
        }
    });

    return res;
};
