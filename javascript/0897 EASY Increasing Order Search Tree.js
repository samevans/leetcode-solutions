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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let newRoot;

    let curr = root;
    const stack = [];

    while(1){
        while(!!curr){
            stack.push(curr);
            curr=curr.left;
        }

        if(!stack.length) return newRoot;

        let last = stack.pop();

        if(!!newRoot){
            let curr2 = newRoot;
            while(!!curr2.right){
                curr2=curr2.right;
            }
            curr2.right = new TreeNode(last.val);
        }else{
            newRoot = new TreeNode(last.val);
        }

        curr = last.right;
    }
};
