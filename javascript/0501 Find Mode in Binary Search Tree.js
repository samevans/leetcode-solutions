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
 * @return {number[]}
 */
var findMode = function(root) {

    if(!root) {
        return [];
    }

    let count = {}
    let bests = {}
    let best = 0;

    let queue = [root];

    while(queue.length > 0) {

        let curr = queue.shift();

        if(count[curr.val]){
            count[curr.val]+=1
        } else {
            count[curr.val]=1;
        }

        best = Math.max(best, count[curr.val])

        if(!bests[best]){
            bests[count[curr.val]] = [curr.val]
        } else {
            bests[count[curr.val]].push(curr.val);
        }

        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);

    }

    return bests[best];

};
