/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    root.level = 0;
    let pNode = null, qNode = null
    const stack = [root];

    while(stack.length && !(pNode && qNode)){
        let curr = stack.pop();

        if(curr.val===p.val) pNode = curr;
        if(curr.val===q.val) qNode = curr;

        if(curr.right){
            curr.right.parent = curr;
            curr.right.level = curr.level+1;
            stack.push(curr.right);
        }
        if(curr.left){
            curr.left.parent = curr;
            curr.left.level = curr.level+1;
            stack.push(curr.left);
        }
    }

    while(pNode!==qNode){
        if(pNode.level<qNode.level){
            qNode = qNode.parent;
        }
        else if(pNode.level>qNode.level){
            pNode = pNode.parent;
        }
        else{
            pNode = pNode.parent;
            qNode = qNode.parent;
        }
    }
    return pNode;
};
