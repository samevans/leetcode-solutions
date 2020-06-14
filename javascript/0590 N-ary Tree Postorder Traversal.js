/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const answer = [];
    if(root){
        const stack = [root];
        while(stack.length>0){
            let curr = stack.pop();
            answer.push(curr.val);
            for(var i=0;i<curr.children.length;i++){
                stack.push(curr.children[i])
            }
        }
        return answer.reverse();
    }
    return answer;
};
