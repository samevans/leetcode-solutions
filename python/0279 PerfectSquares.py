class Solution(object):
    def numSquares(self, n):
        """
        :type n: int
        :rtype: int
        """
        squares = []
        
        x = 1
        while x**2 <= n:
            squares.append(x**2)
            x+=1
            
        count=0
        toCheck = {n}
        while toCheck:
            count += 1
            temp = set()
            for x in toCheck:
                for y in squares:
                    if x == y:
                        return count
                    if x < y:
                        break
                    temp.add(x-y)
            toCheck = temp

        return count
            
            
            