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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

    if(root){
        const queue = [root];

        while(queue.length > 0){
            const curr = queue.shift();
            if(val===curr.val){
                return curr;
            }

            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);

        }
    }

    return null;

};
