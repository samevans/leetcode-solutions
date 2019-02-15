# Definition for an interval.
# class Interval(object):
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[Interval]
        :rtype: List[Interval]
        """
        
        if not intervals:
            return []
        
        intervals = sorted(intervals, key=lambda x:x.start)
        
        result = [intervals[0]]
        
        for interval in intervals[1:]:
            if interval.start <= result[-1].end:
                result[-1] = Interval(result[-1].start, max(interval.end,result[-1].end))
            else:
                result.append(interval)
        return result