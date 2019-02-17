class Solution(object):
    def isMatch(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
        
        d = [False] * len(s)
        i = 0
        j = 0
        
        while i < len(s) and j < len(p):
            
            if s[i] == p[j]:
                d[i] = True
            elif p[j]=="*":
                target = s[i-1]
                
                temp_i = i
                for index, char in enumerate(s[i:]):
                    if char == target:
                        d[temp_i] = True
                        temp_i+=1
                    else:
                        break
                i+=temp_i-i
            
            i+=1
            j+=1
        
        print d
        
                    
                
        
                