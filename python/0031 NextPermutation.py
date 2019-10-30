class Solution(object):
    def nextPermutation(self, nums):
        right = len(nums)-1
        left = -1
        
        while right > 0:
            if nums[right-1] < nums[right]:
                left = right-1
                break
            right-=1
        
        for i in range(len(nums)):
            last_index = len(nums)-1-i

            if nums[last_index] > nums[left]:
                nums[last_index],nums[left] = nums[left],nums[last_index]
                
                nums[left+1:] = sorted(nums[left+1:])
                return