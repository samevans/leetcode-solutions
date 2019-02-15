class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        
        parens = {
            ")":"(",
            "]":"[",
            "}":"{}"
        }
        
        stack = []
        
        for paren in s:
            if paren in parens.values():
                stack.append(paren)
            else:
                if len(stack) == 0 or parens[paren] != stack.pop():
                    return False
            
        return len(stack) == 0