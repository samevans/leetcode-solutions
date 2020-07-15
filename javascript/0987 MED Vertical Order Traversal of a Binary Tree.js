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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const answer = [];
    const columns = {};
    if(!!root){
        const stack = [[root,0]];
        while(stack.length){
            let curr = stack.pop();
            let node=curr[0], col=curr[1];

            if(!columns[col]) columns[col] = [];
            columns[col].push(node.val);

            if(node.right) stack.push([node.right, col+1]);
            if(node.left) stack.push([node.left, col-1]);
        }
    }

    for(let key of Object.keys(columns).sort((a,b)=>a-b)){
        answer.push(columns[key])
    }
    return answer;


};
