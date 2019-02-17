class Solution(object):
    
    def gameOfLife(self, board):
        """
        :type board: List[List[int]]
        :rtype: void Do not return anything, modify board in-place instead.
        """
        
        # 0 -> 2 dead to live
        # 1 -> 3 live to dead
        
        for row in range(len(board)):
            for col in range(len(board[0])):
                count = self.countNeighbors(board, row, col)
                live = board[row][col]
                
                if live and count < 2:
                    board[row][col] = 3
                elif live and count >3:
                    board[row][col] = 3
                elif not live and count == 3:
                    board[row][col] = 2
                
        for row in range(len(board)):
            for col in range(len(board[0])):
                cell = board[row][col] 
                
                if cell == 2:
                    board[row][col] = 1
                elif cell == 3:
                    board[row][col] = 0
        
        
    def countNeighbors(self, board, row, col):
        rows = len(board)
        cols = len(board[0])
        
        neighbors = [(col,row-1),(col+1,row-1),(col+1,row),(col+1,row+1),(col,row+1),(col-1,row+1),(col-1,row),(col-1,row-1)]
        count = 0
        
        for neighbor in neighbors:
            y = neighbor[0]
            x = neighbor[1]
            if x < 0 or y < 0 or x >= rows or y >= cols:
                continue
            if board[x][y] == 1 or board[x][y] == 3:
                count += 1
        
        return count
