# Definition for an interval.
# class Interval(object):
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution(object):
    def minMeetingRooms(self, intervals):
        """
        :type intervals: List[Interval]
        :rtype: int
        """
        if not intervals:
            return 0
    
        intervals = sorted(intervals,key=lambda x:x.start)
        times = [] #min heap
        
        rooms = 0
        
        for i in intervals:
            if times and times[0] <= i.start:
                heapq.heappop(times)
            
            heapq.heappush(times, i.end)
            rooms = max(rooms,len(times))
            
        return rooms