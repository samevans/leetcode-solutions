class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        left = 0
        right = 1
        best = ""
        
        while left < len(s):
            window = s[left:right]
            if window == window[::-1]:
                if len(window) >= len(best):
                    best = window
            
            right += 1
            if right > len(s):
               left += 1
               right = left
        
        return best