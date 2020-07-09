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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);

    let curr = root;
    while(1){
        if(val<=curr.val){
            if(curr.left){
                curr = curr.left;
            }else{
                curr.left = new TreeNode(val);
                break;
            }
        }else{
            if(curr.right){
                curr = curr.right;
            }else{
                curr.right = new TreeNode(val);
                break;
            }
        }
    }

    return root;
};
