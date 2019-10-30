class Solution(object):
    def getSkyline(self, buildings):
        """
        :type buildings: List[List[int]]
        :rtype: List[List[int]]
        """
        # `position` stores all coordinates where the largest height may change
        # `alive` stores all buildings whose ranges cover the current coordinate
        position = sorted(set([building[0] for building in buildings] + [building[1] for building in buildings]))
        ptr, prev_height = 0, 0
        alive, result = [], []
        
        for curr_pos in position:
            # pop buildings that end at or before `curPos` out of the priority queue
            # they are no longer "alive"
            while alive and alive[0][1] <= curr_pos:
                heapq.heappop(alive)
            
            # push [negative_height, end_point] of all buildings that start before `curPos` onto the priority queue
            # they are candidates for the current highest building
            while ptr < len(buildings) and buildings[ptr][0] <= curr_pos:
                heapq.heappush(alive, [-buildings[ptr][2], buildings[ptr][1]])
                ptr += 1
            
            # now alive[0] must be the largest height at the current position
            if alive:
                curr_height = -alive[0][0]
                if curr_height != prev_height:
                    result.append([curr_pos, curr_height])
                    prev_height = curr_height
            else:  # no building -> horizon
                result.append([curr_pos, 0])
                
        return result