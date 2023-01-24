class TreeNode {
    constructor(val, left, right) {
        this.val = val || 0;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * Leetcode index: 145
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
const postTraversal = (root) => {
    const res = [];

    const dfs = (node) => {
        if (node === null) return;
        dfs(node.left);
        dfs(node.right);
        res.push(node.val);
    };
    
    dfs(root);

    return res;
};
