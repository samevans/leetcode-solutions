class Solution(object):
    def findJudge(self, N, trust):
        """
        :type N: int
        :type trust: List[List[int]]
        :rtype: int
        """
        
        trusted = [0] * (N+1)
        
        for t in trust:
            a,b = t[0], t[1]
            trusted[a] -=1
            trusted[b] +=1
        
        for i in range(1, N+1):
            if trusted[i] == (N-1):
                return i
            
        return -1