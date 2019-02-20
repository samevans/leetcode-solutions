class Solution(object):
    def summaryRanges(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        ranges = []
        nums = sorted(set(nums))
        
        for i in nums:
            if i-1 not in nums:
                j = i
                while j+1 in nums:
                    j=j+1
                if j==i:
                    ranges.append(str(i))
                else:
                    ranges.append(str(i)+"->"+str(j))
        
        return ranges