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
    const answer = [];

    if(!!root){
        const queue = [[root,0,false]]
        while(queue.length){

            let [node, depth, goBackwards] = queue.shift();

            if(!answer[depth]) answer[depth] = [];

            if(goBackwards) answer[depth].unshift(node.val);
            else answer[depth].push(node.val);

            if(node.left) queue.push([node.left,depth+1,!goBackwards])
            if(node.right) queue.push([node.right,depth+1,!goBackwards])

        }
    }

    return answer;
};
