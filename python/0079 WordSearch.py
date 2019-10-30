class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """

        for row in range(len(board)):
            for col in range(len(board[0])):
                if board[row][col] == word[0]:
                    if self.dfs(board, word, row, col):
                        return True
        return False

    def dfs(self, board, word, row, col, visited=set()):

        if len(word) == 1:
            return True

        visited.add((row, col))

        hasWord = False

        def isValid(point):
            x, y = point
            if x < 0 or y < 0 or x >= len(board) or y >= len(board[0]):
                return False
            return True

        neighbors = []
        neighbors.append((row+1, col))
        neighbors.append((row-1, col))
        neighbors.append((row, col+1))
        neighbors.append((row, col-1))

        for neighbor in neighbors:
            if neighbor not in visited and isValid(neighbor):
                r, c = neighbor
                if board[r][c] == word[1]:
                    hasWord = hasWord or self.dfs(
                        board, word[1:], r, c, visited)

        return hasWord
