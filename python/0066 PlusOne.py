class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        
        digit = int("".join(map(str,digits)))
        digit+=1
        return map(int,list(str(digit)))