# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def flatten(self, root):
        """
        :type root: TreeNode
        :rtype: None Do not return anything, modify root in-place instead.
        """
        if not root:
            return None
        
        current = root
        stack = []
        done = 0
        
        preOrder = []
        
        while not done:
            if current is not None:
                stack.append(current)
                preOrder.append(current.val)
                current = current.left
            else:
                if len(stack) > 0:
                    current = stack.pop()
                    current = current.right
                else:
                    done = 1
                    
        
        root.left = root.right = None
        root.val = preOrder.pop(0)
        
        current = root
        while preOrder:
            current.right = TreeNode(preOrder.pop(0))
            current = current.right
