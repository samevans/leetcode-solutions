# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def findTilt(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.ans = 0
        def _sum(node):
            if node: 
                left, right = _sum(node.left), _sum(node.right)
                self.ans += abs(left - right)
                return node.val + left + right
            return 0
        _sum(root)
        return self.ans
        
