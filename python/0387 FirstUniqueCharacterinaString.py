class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """

        counter = {}
        
        for index, char in enumerate(s):
            if char in counter:
                tup = counter[char]
                counter[char] = (index, tup[1]+1)
            else:
                counter[char] = (index, 1)
                
        minimum = float("inf")
        for value in counter.values():
            index = value[0]
            count = value[1]
            
            if count == 1:
                minimum = min(minimum,index)
                
        if minimum == float("inf"):
            return -1
        else:
            return minimum
            
            
            