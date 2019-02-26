class Solution(object):
    def maxCoins(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        results = []
        self.burstBalloons(nums, results, 0)
        return max(results)
    
    def burstBalloons(self, nums, results, total):
        
        if len(nums)==0:
            results.append(total)
            return
        
        for i in range(len(nums)):
            
            left = 1 if i==0 else nums[i-1]
            middle = nums[i]
            right = 1 if i==len(nums)-1 else nums[i+1]
            
            self.burstBalloons(nums[:i]+nums[i+1:], results, total+(left*middle*right))
            
            
            