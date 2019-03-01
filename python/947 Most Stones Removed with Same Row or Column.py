class Solution(object):
    def removeStones(self, stones):
        """
        :type stones: List[List[int]]
        :rtype: int
        """
        def dfs(i, j):
            points.discard((i,j))
            for y in rows[i]:
                if (i,y) in points:
                    dfs(i,y)
            for x in cols[j]:
                if (x,j) in points:
                    dfs(x,j)
            
        rows = {}
        cols = {}
        points = set()
        islands = 0
        
        for x, y in stones:
            row = rows.get(x,[])
            row.append(y)
            rows[x] = row
            
            col = cols.get(y,[])
            col.append(x)
            cols[y] = col
            
            points.add((x, y))
            
        for x, y in stones:
            if (x,y) in points:
                dfs(x, y)
                islands+=1
        
        return len(stones) - islands
            
        
            