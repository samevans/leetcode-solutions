class Solution(object):
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        area = 0
        
        for x in range(len(grid)):
            for y in range(len(grid[0])):
                if grid[x][y] == 1:
                    count = self.dfsCount(grid, x, y)
                    area = max(area,count)
        
        return area
                    
        
    def dfsCount(self, grid, row, col):
        
        count = 0
        stack = [(row, col)]
        while stack:
            vertex = stack.pop()
            r, c = vertex[0], vertex[1]

            if r<0 or c<0 or r>=len(grid) or c>=len(grid[0]) or grid[r][c] != 1:
                continue
            
            grid[r][c] = "#"
            count+=1
            
            stack.append((r+1,c))
            stack.append((r-1,c))                
            stack.append((r,c+1))                
            stack.append((r,c-1))                
        return count