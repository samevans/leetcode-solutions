class Solution(object):
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        
        def dfs(grid,row,col):
            stack = [(row,col)]
            
            while stack:
                vertex = stack.pop()
                x,y = vertex[0], vertex[1]
                if x < 0 or y < 0 or x >= len(grid) or y >= len(grid[0]) or grid[x][y] != "1":
                    continue
                grid[x][y] = "#"
                stack.append((x+1,y))
                stack.append((x-1,y))
                stack.append((x,y+1))
                stack.append((x,y-1))
                    
        
        count = 0
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j]=="1":
                    dfs(grid,i,j)
                    count+=1
        
        return count