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
var levelOrderBottom = function(root) {

    const answer = [];

    if(root){

        const queue = [Object.freeze([root, 0])];

        while(queue.length>0){

            let node = queue.shift();
            let current = node[0], depth = node[1];

            if(!answer[depth]){
                answer[depth]=[current.val];
            }else{
                answer[depth].push(current.val);
            }

            if(current.left) queue.push(Object.freeze([current.left,depth+1]));
            if(current.right) queue.push(Object.freeze([current.right,depth+1]));

        }

    }

    return answer.reverse();

};
