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
 * @return {number}
 */
var maxDepth = function(root) {
    let best = 0;

    if(root){
        let queue = [Object.freeze([root,1])];

        while(queue.length>0){

            let node = queue.shift();

            let current = node[0];
            best = node[1];

            if(current.left) queue.push(Object.freeze([current.left,best+1]))
            if(current.right) queue.push(Object.freeze([current.right,best+1]))

        }
    }
    return best;
};
