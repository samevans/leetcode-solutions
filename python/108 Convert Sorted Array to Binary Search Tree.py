# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        if not nums:
            return None
        
        mid = len(nums)/2
        root = TreeNode(nums.pop(mid))
        while nums:
            mid = len(nums)/2
            self.insert(root, nums.pop(mid))
        return root
        
    def insert(self, node, val):
        if val < node.val:
            if node.left:
                self.insert(node.left, val)
            else:
                node.left = TreeNode(val)
        else:
            if node.right:
                self.insert(node.right, val)
            else:
                node.right = TreeNode(val)