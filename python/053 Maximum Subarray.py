class Solution(object):
    def maxSubArray(self, arr):
        """
        :type nums: List[int]
        :rtype: int
        """
        for i in range(1,len(arr)):
            if arr[i-1] > 0:
                arr[i] += arr[i-1]
        
        return max(arr)