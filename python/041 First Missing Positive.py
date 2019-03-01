class Solution(object):
    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 1
        
        nums = set(nums)
        max_num = len(nums)+1
        
        for i in range(1, max_num+1):
            if i not in nums:
                return i
                