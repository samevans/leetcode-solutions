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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const toDelete = {}
    for(const del of to_delete){
        toDelete[del] = 1;
    }

    const output = []
    gatherNodes(output, root, toDelete);

    if(!toDelete[root.val]){
        output.unshift(root);
    }

    return output;
};

var gatherNodes = function(output, root, toDelete){
    if(!root){
        return null;
    }

    root.left = gatherNodes(output, root.left, toDelete);
    root.right = gatherNodes(output, root.right, toDelete);

    if(toDelete[root.val]){
        if(!!root.left) output.push(root.left)
        if(!!root.right) output.push(root.right)
        return null;
    }

    return root;
}
