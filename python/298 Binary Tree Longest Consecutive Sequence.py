# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):
    def longestConsecutive(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """

        if not root:
            return 0

        max_streak = 0

        queue = [(root, 1)]

        while queue:
            node, streak = queue.pop(0)

            max_streak = max(max_streak, streak)

            if node.left:
                if node.left.val == node.val+1:
                    queue.append((node.left, streak+1))
                else:
                    queue.append((node.left, 1))
            if node.right:
                if node.right.val == node.val+1:
                    queue.append((node.right, streak+1))
                else:
                    queue.append((node.right, 1))

        return max_streak
