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
var averageOfLevels = function(root) {
    const acc=[];
    if(!!root){
        const queue = [Object.freeze([root,0])];
        while(queue.length){
            let curr = queue.shift();
            let node = curr[0], depth=curr[1];

            if(!acc[depth]) acc[depth] = [node.val];
            else acc[depth].push(node.val);

            if(node.left) queue.push(Object.freeze([node.left, depth+1]));
            if(node.right) queue.push(Object.freeze([node.right, depth+1]));

        }
    }
    for(let i=0;i<acc.length;i++){
        acc[i] = ((acc[i].reduce((a, b) => a + b, 0))/acc[i].length);
    }
    return acc;
};
