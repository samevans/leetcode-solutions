/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {

    const answer = [];
    if(root){
        const stack = [root];
        while(stack.length>0){
            const curr = stack.pop();
            answer.push(curr.val);

            for(child of curr.children.reverse()) {
                stack.push(child)
            }
        }
    }
    return answer;

};
