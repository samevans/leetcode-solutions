class Solution(object):
    def numWays(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: int
        """
        
        if n == 0 or k == 0:
            return 0
        
        results = []
        self.paintFence(n, k, "", results)
        return len(results)
        
    def paintFence(self, n, k, answer, results):
        if len(answer) == n:
            results.append(answer)
            return
        
        index = len(answer)
        
        for color in range(k):
            if index > 1 and answer[index-1] == str(color) and answer[index-2] == str(color):
                continue
            self.paintFence(n,k, answer + str(color), results)