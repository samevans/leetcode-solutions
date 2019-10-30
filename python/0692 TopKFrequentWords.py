class Solution(object):
    def topKFrequent(self, words, k):
        """
        :type words: List[str]
        :type k: int
        :rtype: List[str]
        """
        
        word_counter = collections.Counter()
        
        for word in words:
            word_counter[word] += 1
            
        heap = word_counter.values()
        
        result = []
        
        for i in range(k):
            heapq._heapify_max(heap)
            popped = heapq.heappop(heap)
            
            candidates = []
            for key, value in word_counter.items():
                if value == popped:
                    candidates.append(key)
            
            choose = sorted(candidates)[0]
            word_counter.pop(choose)
            result.append(choose)
            
        return result