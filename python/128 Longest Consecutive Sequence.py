class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums = set(nums)
        best = 0
        for i in nums:
            if i-1 not in nums:
                streak = 1
                while i+1 in nums:
                    streak += 1
                    i+=1
                best = max(streak, best)
        return best