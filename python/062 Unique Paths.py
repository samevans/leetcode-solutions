class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        table = [[1 for x in range(n)] for x in range(m)]
        
        for i in range(1, m):
            for j in range(1, n):
                table[i][j] = table[i][j-1] + table[i-1][j]
                
        return table[-1][-1]