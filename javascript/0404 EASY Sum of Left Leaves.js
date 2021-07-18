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
var sumOfLeftLeaves = function(root) {
    let result = 0
    if(root){
        let queue = [[root,false]]
        while(queue.length){
            let [curr,isLeft] = queue.shift()
            if(isLeft && !curr.left && !curr.right) result += curr.val
            if(curr.left) queue.push([curr.left, true])
            if(curr.right) queue.push([curr.right, false])
        }
    }
    return result
};