class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        my_set = set(i for i in range(len(nums)+1))
        return (my_set-set(nums)).pop()
        
