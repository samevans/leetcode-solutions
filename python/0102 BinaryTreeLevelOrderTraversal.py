# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        
        if not root:
            return []
        
        output = []
        max_depth = 0
        
        queue = [(root, 1)]
        
        while queue:
            node, depth = queue.pop(0)
            max_depth = max(depth, max_depth)
            
            while len(output) < max_depth:
                output.append([])
            
            output[depth-1].append(node.val)
            
            if node.left:
                queue.append((node.left,depth+1))
            if node.right:
                queue.append((node.right,depth+1))
                
        return output
