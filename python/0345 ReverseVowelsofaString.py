class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        vowels = set(["a","e","i","o","u", "A", "E", "I", "O", "U"])
        
        left = 0 
        right = len(s)-1
        
        while left < right:
            
            if s[left] in vowels and s[right] in vowels:
                tempLeft = s[left]
                tempRight = s[right]
                
                s = s[:left] + tempRight + s[left+1:]
                s = s[:right] + tempLeft + s[right+1:]
                
                left+=1
                right-=1
            if s[left] not in vowels:
                left+=1
            if s[right] not in vowels:
                right-=1
                
        return s