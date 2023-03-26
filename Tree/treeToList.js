/**
 *
 * @param {Array} arr
 * @return {Array}
 */
const treeToList = (arr) => {
    let res = [];
    const dfs = (tree) => {
        tree.forEach((item) => {
            if (item.children) {
                dfs(item.children);
                delete item.children;
            }

            res.push(item);
        });
    };

    dfs(arr);
    return res;
};
