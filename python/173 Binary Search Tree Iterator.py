# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class BSTIterator(object):

    def __init__(self, root):
        """
        :type root: TreeNode
        """
        self.current = root
        self.stack = []

    def next(self):
        """
        @return the next smallest number
        :rtype: int
        """
        answer = None
        while answer is None:
            if self.current is not None:
                self.stack.append(self.current)
                self.current = self.current.left
            else:
                if len(self.stack) > 0:
                    self.current = self.stack.pop()
                    answer = self.current.val
                    self.current = self.current.right
        return answer
    
    def hasNext(self):
        """
        @return whether we have a next smallest number
        :rtype: bool
        """
        return self.current is not None or len(self.stack) > 0


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()