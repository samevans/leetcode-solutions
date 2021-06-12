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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let result = Infinity
    
    if(root){
        let queue = [root]
        while(queue.length){
            let curr = queue.shift()
            
            result = Math.abs(curr.val-target) < Math.abs(result-target) ? curr.val : result
            
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
    }
    
    return result
};