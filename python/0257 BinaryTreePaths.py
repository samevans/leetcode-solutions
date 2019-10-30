# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):
    def binaryTreePaths(self, root):
        """
        :type root: TreeNode
        :rtype: List[str]
        """
        if not root:
            return []

        queue = [(root, [str(root.val)])]

        result = []

        while queue:
            node, path = queue.pop(0)

            if node.left:
                queue.append((node.left, path + [str(node.left.val)]))
            if node.right:
                queue.append((node.right, path + [str(node.right.val)]))

            if not node.left and not node.right:
                result.append("->".join(path))

        return result
