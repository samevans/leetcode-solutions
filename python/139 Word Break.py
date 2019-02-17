class Solution(object):
    def wordBreak(self, s, wordDict):
        """
        :type s: str
        :type wordDict: List[str]
        :rtype: bool
        """
        
        d = [False] * len(s)   
        
        for i in range(len(s)):
            for word in wordDict:
                
                if word == s[i-len(word)+1:i+1] and (d[i-len(word)] or i-len(word) == -1):
                    d[i] = True
                    
        return d[-1]