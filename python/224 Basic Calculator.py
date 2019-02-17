class Solution(object):
    def calculate(self, s):
        """
        :type s: str
        :rtype: int
        """
        number = 0
        sign = 1
        stack = []
        result = 0
        
        for char in s:
            if char.isdigit():
                number = 10*number + int(char)
                
            elif char=="+" or char =="-":
                result += sign*number
                number = 0
                if char == "+":
                    sign = 1
                else:
                    sign = -1
                    
            elif char == "(":
                stack.append(result)
                stack.append(sign)
                result = 0
                sign = 1
                
            elif char == ")":
                result += sign*number
                result *= stack.pop()
                result += stack.pop()
                number = 0
                sign = 1
            
        return result + sign*number