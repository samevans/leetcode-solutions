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
var goodNodes = function(root) {
    let result = 0
    if(root){
        let queue = [[root,-Infinity]]
        while(queue.length){
            let [curr,max] = queue.shift()
            if(curr.val>=max) result++
            if(curr.left) queue.push([curr.left, Math.max(max,curr.val)])
            if(curr.right) queue.push([curr.right, Math.max(max,curr.val)])
        }
    }
    return result
};