/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    if(root){
        const queue = [root];
        while(queue.length>0){
            let curr = queue.shift();
            if(curr.val>=L&&curr.val<=R){
                sum+=curr.val;
            }
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    }
    return sum;
};
