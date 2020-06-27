/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const answer = [];
    if(!!root){
        const queue = [[root,0]];
        while(queue.length){
            let curr=queue.shift();
            let node=curr[0], depth=curr[1];

            if(!answer[depth]) answer[depth] = [node.val];
            else answer[depth].push(node.val);

            for(child of node.children){
                queue.push([child,depth+1]);
            }
        }
    }
    return answer;
};
