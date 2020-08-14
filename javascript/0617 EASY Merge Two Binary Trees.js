/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    return traversal(t1, t2);
};

var traversal = function(t1, t2, mergedRoot=undefined){
    mergedRoot = (!t1 && !t2)
        ? null
        : new TreeNode(
            (t1 ? t1.val : 0) +
            (t2 ? t2.val : 0)
        )

    if(!!mergedRoot){
        mergedRoot.left = traversal(
            t1 ? t1.left : null,
            t2 ? t2.left : null,
            mergedRoot.left
        );
        mergedRoot.right = traversal(
            t1 ? t1.right : null,
            t2 ? t2.right : null,
            mergedRoot.right
        );
    }

    return mergedRoot;
}
