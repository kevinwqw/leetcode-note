class TreeNode {
    constructor(val, left, right) {
        this.val = val || 0;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * Leetcode index: 144
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
const preTraversal = (root) => {
    const res = [];

    const dfs = (node) => {
        if (node === null) return;
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);

    return res;
};
