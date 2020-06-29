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
    const answer = [];
    if(!!root){
        let queue = [[root,0]];
        while(queue.length){
            let curr = queue.shift();
            let node = curr[0], depth = curr[1];

            answer[depth] = node.val;

            if(node.left) queue.push([node.left,depth+1]);
            if(node.right) queue.push([node.right,depth+1]);
        }
    }
    return answer;
};
