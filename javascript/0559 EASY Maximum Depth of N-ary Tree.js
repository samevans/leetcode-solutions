/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    let best = 0;
    if(!!root){
        const queue = [[root,1]];
        while(queue.length){
            let curr = queue.pop();
            let node = curr[0], depth = curr[1];

            best = Math.max(depth, best);

            for(child of node.children){
                queue.push([child,depth+1]);
            }
        }
    }
    return best
};
