/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    var getLeaves = function(root, acc=[]) {
        if(!!root){
            if(root.left) getLeaves(root.left, acc);
            if(root.right) getLeaves(root.right, acc);
            if(!root.left && !root.right) acc.push(root.val)
        }
        return acc;
    }

    let l1 = getLeaves(root1), l2 = getLeaves(root2);

    if(l1.length!==l2.length) return false;

    for(var i=0;i<l1.length;i++){
        if(l1[i]!==l2[i]) return false;
    }
    return true;

};
