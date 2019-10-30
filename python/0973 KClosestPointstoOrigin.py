class Solution(object):
    def kClosest(self, points, K):
        """
        :type points: List[List[int]]
        :type K: int
        :rtype: List[List[int]]
        """
        
        distances = {}
        heap = []
        
        for point in points:
            x, y = point[0], point[1]
            
            dist = math.sqrt(x**2+y**2)
            
            distances.setdefault(dist,[])
            distances[dist].append(point)
            
            heap.append(dist)
            
        heapq.heapify(heap)
        
        result = []
        for _ in range(K):
            dist = heapq.heappop(heap)
            result.append(distances[dist].pop(0))
            
        return result