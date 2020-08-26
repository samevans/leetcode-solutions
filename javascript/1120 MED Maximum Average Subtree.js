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
var maximumAverageSubtree = function(root) {
    result = [-Infinity];

    solver(result,root);

    return result[0];
};

var solver = function(result, root){
    if(!!root){
        let totalVal=0, numNodes=0;

        const queue = [root];
        while(queue.length){
            let curr = queue.shift();

            numNodes++;
            totalVal+=curr.val;

            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
        let avg = totalVal/numNodes;
        result[0] = Math.max(result[0], avg)

        solver(result, root.left)
        solver(result, root.right)
    }
}
