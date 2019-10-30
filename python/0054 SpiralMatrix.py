class Solution(object):
    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        
        if not matrix or not matrix[0]:
            return []
        answer = []
        rows = len(matrix)
        cols = len(matrix[0])
        
        up = 0
        down = rows - 1
        left = 0
        right = cols - 1
        
        while left < right and up < down:
            
            for col in range(left, right):
                answer.append(matrix[up][col])
                
            for row in range(up, down):
                answer.append(matrix[row][right])
                
            for col in range(right, left, -1):
                answer.append(matrix[down][col])
                
            for row in range(down,up, -1):
                answer.append(matrix[row][left])
            
            up += 1
            down -= 1
            left +=1 
            right -= 1
            
        if left == right:
            for row in range(up, down + 1):
                answer.append(matrix[row][right])
        elif up == down:
            for col in range(left, right + 1):
                answer.append(matrix[up][col])
        return answer
            