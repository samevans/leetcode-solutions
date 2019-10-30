class Solution(object):
    def mincostToHireWorkers(self, quality, wage, K):
        """
        :type quality: List[int]
        :type wage: List[int]
        :type K: int
        :rtype: float
        """
        worker_ratios = []
        n = len(quality)
        
        # For each worker, store the pair of
        # 1. ratio of wage to quality and
        # 2. quality        
        for i in range(n):
            ratio = float(wage[i])/float(quality[i])
            worker_ratios.append((ratio, quality[i]))
        
        
        # Sort the ratios so that we start at min wage to
        # quality and go up while calculating total cost
        worker_ratios.sort()
        
        
        # Heap h stores the max qualities encountered so far
        h = []
		# total_quality stores the total of qualities currently stored in the max heap
        total_quality = 0
		# Final result is stored here
        min_cost = float("inf")
		 
        for ratio, qual in worker_ratios:
            total_quality += qual
            
            # Store negative of quality for max heap
            heapq.heappush(h, -qual)
            
            if len(h) > K:
                # Storing negative values for quality
                # so, on popping max value, we get quality to subtract
                # from current total quality
                quality_to_remove = heapq.heappop(h)
                total_quality += quality_to_remove
            
            if len(h) == K:
                # If there are current K items in max
                # heap of qualities, calculate the
                # cost to hire these workers at rate of
                # current worker's ratio. Because the ratios are sorted
				# we are here trying to get min cost for max quality
                cost = total_quality * ratio
                min_cost = min(min_cost, cost)

        return min_cost
            
        