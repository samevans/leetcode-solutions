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
var levelOrder = function(root) {
    const answer = [];
    if(!!root){
        let queue = [Object.freeze([root,0])];
        while(queue.length>0){
            let curr = queue.shift();
            let node=curr[0], depth=curr[1];

            if(!answer[depth]){
                answer[depth] = [];
            }
            answer[depth].push(node.val)

            if(node.left) queue.push(Object.freeze([node.left,depth+1]));
            if(node.right) queue.push(Object.freeze([node.right,depth+1]));
        }
    }
    return answer;
};
