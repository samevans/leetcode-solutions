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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let answer = [];
    if(!!root){
        const stack=[[root,root.val,[root.val]]];
        while(stack.length){
            curr = stack.pop();
            let node = curr[0], count= curr[1], path=curr[2];
            if(count===sum && !node.right && !node.left) answer.push(path);
            if(node.right) stack.push([node.right, count+node.right.val, path.concat(node.right.val)]);
            if(node.left) stack.push([node.left, count+node.left.val, path.concat(node.left.val)]);
        }
    }
    return answer;
};
