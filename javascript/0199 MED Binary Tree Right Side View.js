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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = []
    if(root){
        let queue = [[root,0]]
        while(queue.length){
            let [curr,depth] = queue.shift()
            result[depth] = curr.val
            if(curr.left) queue.push([curr.left, depth+1])
            if(curr.right) queue.push([curr.right, depth+1])
        }
    }
    return result
};