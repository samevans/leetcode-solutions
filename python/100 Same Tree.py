# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        p_result = self.levelOrderTraversal(p)
        q_result = self.levelOrderTraversal(q)
        
        return p_result==q_result
        
    def levelOrderTraversal(self, root):
        
        queue=[root]
        
        result = []
        
        while queue:
            node = queue.pop(0)
            
            if node is None:
                result.append(None)
                continue
                
            result.append(node.val)
            
            if node.left:
                queue.append(node.left)
            else:
                queue.append(None)
                
            if node.right:
                queue.append(node.right)
                
        return result