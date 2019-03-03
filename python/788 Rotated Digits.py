class Solution(object):
    def rotatedDigits(self, N):
        """
        :type N: int
        :rtype: int
        """
        rotate_diff = {
            2:5,
            5:2,
            6:9,
            9:6,
        }
        
        rotatable = {
            1:0,
            0:1,
            2:5,
            5:2,
            6:9,
            8:8,
            9:6,
        }
        
        result = []
        
        for i in range(1,N+1):
            
            current = i
            
            while current!=0:
                last = current % 10
                if last in rotate_diff and all(int(x) in rotatable for x in list(str(i))):
                    result.append(i)
                    break
                current = (current-last) / 10

        return len(result)