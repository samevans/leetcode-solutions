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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    if(!!root){
        const queue = [root];
        while(queue.length){
            let curr = queue.shift();
            if(curr===null){
                for(val of queue){
                    if(val!==null) return false;
                }
                break;
            }
            queue.push(curr.left);
            queue.push(curr.right);
        }
    }
    return true;
};
