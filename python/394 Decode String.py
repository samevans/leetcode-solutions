class Solution(object):
    def decodeString(self, s):
        """
        :type s: str
        :rtype: str
        """
        number = 0
        string = ""
        stack = []
        
        for char in s:
            if char.isdigit():
                number = 10*number + int(char)
            elif char == "[":
                stack.append(string)
                stack.append(number)
                number = 0
                string = ""
            elif char == "]":
                number = stack.pop()
                string = stack.pop() + number*string
                number = 0
            else:
                string = string + char
        
        return string
    