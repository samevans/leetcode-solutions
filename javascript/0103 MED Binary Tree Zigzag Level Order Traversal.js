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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = []
    if(root){
        let queue = [[root,0,true]]
        while(queue.length){
            let [curr, depth, zigzag] = queue.shift()
            if(!result[depth]) result[depth] = []
            zigzag ? result[depth].push(curr.val) : result[depth].unshift(curr.val)
            if(curr.left){
                queue.push([curr.left, depth+1, !zigzag])
            }
            if(curr.right){
                queue.push([curr.right, depth+1, !zigzag])
            }
        }
    }
    return result
};