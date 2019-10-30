class Solution(object):
    def setZeroes(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        if not matrix or not matrix[0]:
            return
        
        zeroes = []
        
        for row in range(len(matrix)):
            for col in range(len(matrix[0])):
                if matrix[row][col] == 0:
                    zeroes.append((row,col))
                    
        for zero in zeroes:
            r, c = zero
            for row in range(len(matrix)):
                matrix[row][c] = 0
            for col in range(len(matrix[0])):
                matrix[r][col] = 0
