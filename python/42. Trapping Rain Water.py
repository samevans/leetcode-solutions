class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        left = 0
        right = len(height)-1
        left_max = 0
        right_max = 0
        
        water = 0
        
        while left < right:
            hl = height[left]
            hr = height[right]
            
            if hl<hr:
                if hl < left_max:
                    water += left_max-hl
                left_max = max(hl, left_max)
                left+=1
            else:
                if hr < right_max:
                    water += right_max- hr
                right_max = max(hr, right_max)
                right-=1
            
        return water