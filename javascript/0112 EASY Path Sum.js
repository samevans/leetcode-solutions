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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let answer = false;
    if(!!root){
        const stack=[[root,root.val]];
        while(stack.length){
            curr = stack.pop();
            let node = curr[0], count= curr[1];
            if(count===sum && !node.right && !node.left) return true;
            if(node.right) stack.push([node.right, count+node.right.val]);
            if(node.left) stack.push([node.left, count+node.left.val]);
        }
    }
    return answer;
};
