class TreeNode {
    constructor(val, left, right) {
        this.val = val || 0;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * Leetcode index: 94
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
const midTraversal = (root) => {
    const res = [];

    const dfs = (node) => {
        if (node === null) return;
        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
    };

    dfs(root);

    return res;
};
