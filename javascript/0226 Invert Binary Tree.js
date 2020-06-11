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
 * @return {TreeNode}
 */
var invertTree = function(root) {

    if(root){
        let queue = [root];

        while(queue.length>0){
            let current = queue.shift();

            let tempRight = current.right;

            current.right = current.left;
            current.left = tempRight;

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);

        }
    }

    return root;

};
