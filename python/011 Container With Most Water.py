class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        max_area = 0
        left = 0
        right = len(height) - 1
        
        while left < right:
            hl = height[left]
            hr = height[right]
            
            length = min(hl,hr)
            width = right-left
            
            max_area = max(max_area, length*width)
            
            if hl<hr:
                left+=1
            else:
                right-=1
                
        return max_area