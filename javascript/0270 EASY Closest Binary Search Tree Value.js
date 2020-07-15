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
    let answer = [null,Infinity]; // best value, how close
    if(!!root){
        const queue = [root];
        while(queue.length){
            let curr = queue.shift();

            let howClose = Math.abs(curr.val-target);
            if(howClose<answer[1]){
                answer = [curr.val,howClose]
            }

            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    }
    return answer[0];
};
