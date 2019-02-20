class Solution(object):
    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        inf = float("inf")
        best = (-inf,-1)
        
        for index, value in enumerate(nums):
            if value > best[0]:
                best = (value,index)
                
        return best[1]