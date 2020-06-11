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
var isUnivalTree = function(root) {
    if(!root){
        return true;
    }

    const val = root.val;
    queue = [];
    queue.push(root);

    while(queue.length>0){
        let current = queue.shift();

        if(current.val!==val){
            return false;
        }

        if(current.left){
            queue.push(current.left);
        }

        if(current.right){
            queue.push(current.right);
        }
    }
    return true;

};
