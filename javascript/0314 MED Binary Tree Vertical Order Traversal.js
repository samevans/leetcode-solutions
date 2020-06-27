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
var verticalOrder = function(root) {
    const treeOrder = {};
    if(!!root){
        const queue = [Object.freeze([root,0])];
        while(queue.length){
            let curr = queue.shift();
            let node = curr[0], order=curr[1];

            if(!treeOrder[order]) treeOrder[order] = [];
            treeOrder[order].push(node.val);

            if(node.left) queue.push(Object.freeze([node.left, order-1]));
            if(node.right) queue.push(Object.freeze([node.right, order+1]));
        }
    }
    const result = [];
    for(var key of Object.keys(treeOrder).sort((a,b)=>a-b)) result.push(treeOrder[key])
    return result;
};
