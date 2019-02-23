class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        number_dict = {}
        
        for index, value in enumerate(nums):
            needed = target-value
            
            if needed in number_dict:
                return [index, number_dict[needed]]
            
            number_dict[value] = index
