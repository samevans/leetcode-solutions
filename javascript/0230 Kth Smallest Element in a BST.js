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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let curr=root;
    const stack=[],answer=[];
    while(1){
        while(!!curr){
            stack.push(curr);
            curr=curr.left;
        }
        let last=stack.pop();
        if(--k===0) return last.val;
        curr=last.right;
    }
};
