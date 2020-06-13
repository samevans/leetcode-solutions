/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p || !q) {
        return !p && !q
    }

    let queue = [Object.freeze([p,q])];
    while(queue.length > 0){

        let curr = queue.shift();
        let currp = curr[0], currq = curr[1];

        if(currp.val !== currq.val) return false;

        if(currp.left || currq.left){
            if(!currp.left || !currq.left) return false;
            queue.push(Object.freeze([currp.left,currq.left]));
        }

        if(currp.right || currq.right){
            if(!currp.right || !currq.right) return false;
            queue.push(Object.freeze([currp.right,currq.right]));
        }
    }

    return true;
};
