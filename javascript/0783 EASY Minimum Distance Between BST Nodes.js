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
var minDiffInBST = function(root) {
    let curr = root;
    const stack = [], values = [];

    while(1){
        while(!!curr){
            stack.push(curr);
            curr = curr.left;
        }
        if(!stack.length) break;

        let last = stack.pop();
        values.push(last.val);
        curr = last.right;
    }

    let minDiff = Infinity;

    for(let i=1;i<values.length;i++){
        minDiff = Math.min(minDiff, values[i]-values[i-1])
    }

    return minDiff === Infinity ? 0 : minDiff;


};
