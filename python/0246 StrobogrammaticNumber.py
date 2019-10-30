class Solution(object):
    def isStrobogrammatic(self, num):
        """
        :type num: str
        :rtype: bool
        """
        
        strobogrammatic = {
            "0":"0",
            "1":"1",
            "6":"9",
            "8":"8",
            "9":"6"
        }
        
        result = []
        for char in num:
            if char not in strobogrammatic:
                return False
            else:
                result.append(strobogrammatic[char])
                
        return "".join(result[::-1]) == num