/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = []
    if(root){
        let queue = [[root,1]]
        while(queue.length){
            let [curr,depth] = queue.shift()
            if(result.length<depth){
                result.push([])
            }
            result[depth-1].push(curr.val)
            for(let child of curr.children){
                queue.push([child,depth+1])
            }
        }
    }
    return result
};