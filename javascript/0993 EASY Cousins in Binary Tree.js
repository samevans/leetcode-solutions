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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xNode = Object.freeze([null,0]), yNode = Object.freeze([null,0]);

    const queue = [Object.freeze([root,0])];
    while(queue.length>0){
        let curr = queue.shift();
        let node = curr[0], depth=curr[1]

        if(node.left){
            if(node.left.val===x) xNode = Object.freeze([node, depth+1]);
            if(node.left.val===y) yNode = Object.freeze([node, depth+1]);
            queue.push(Object.freeze([node.left, depth+1]))
        }
        if(node.right){
            if(node.right.val===x) xNode = Object.freeze([node, depth+1]);
            if(node.right.val===y) yNode = Object.freeze([node, depth+1]);
            queue.push(Object.freeze([node.right, depth+1]));
        }

        if(xNode[1]>0 && yNode[1]>0) break;
    }

    return xNode[1]===yNode[1] && xNode[0]!==yNode[0]
};
