# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0
        
        queue = [(root,1)]
        
        min_depth = float("inf")
        
        while queue:
            node, depth = queue.pop(0)
            
            if not node.left and not node.right:
                min_depth = min(min_depth, depth)
                
            if node.left:
                queue.append((node.left, depth+1))
            
            if node.right:
                queue.append((node.right, depth+1))
                
        return min_depth
