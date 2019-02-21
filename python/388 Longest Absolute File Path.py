class Solution(object):
    def lengthLongestPath(self, input):
        """
        :type input: str
        :rtype: int
        """
        maxlen = 0
        depths = {-1: 0}
        
        for line in input.splitlines():
            path = line.lstrip('\t')
            depth = len(line) - len(path)
            
            if "." in path:
                maxlen = max(maxlen, depths[depth-1] + len(path)) 
            else:
                depths[depth] = depths[depth-1] + len(path) + 1
                
        return maxlen
                
        