class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        counter = collections.Counter()
        for num in nums:
            counter[num]+=1
         
        heap = counter.values()
        heapq._heapify_max(heap)
        
        result = []
        for i in range(k):
            amount = heapq.heappop(heap)
            heapq._heapify_max(heap)
            for key,value in counter.items():
                if value == amount:
                    result.append(key)
                    counter.pop(key)
                    break
                    
        return result