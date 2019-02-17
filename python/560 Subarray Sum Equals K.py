class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        
        num_dict = collections.Counter()
        num_dict[0] = 1
        
        total_sum = 0
        answer = 0
        
        for number in nums:
            total_sum += number
            answer += num_dict[total_sum-k]
            
            num_dict[total_sum] += 1
            
        return answer
                
                