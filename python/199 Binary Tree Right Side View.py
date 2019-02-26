# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def rightSideView(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        stack = []
        current = (root,1)
        done = 0
        
        output = []

        while not done:
            
            if current[0] is not None:
                stack.append(current)
                node, depth = current[0], current[1]
                
                if len(output) < depth:
                    output.append(node.val)
                else:
                    output[depth-1] = node.val
                    
                current = (node.left, depth+1)
                
            else:
                if len(stack) > 0:
                    current = stack.pop()
                    node, depth = current[0], current[1]
                    
                    if node:
                        if len(output) < depth:
                            output.append(node.val)
                        else:
                            output[depth-1] = node.val
                    
                    current = (node.right, depth+1)
                    
                else:
                    done = 1
                
        
        return output