class Solution(object):
    def nextClosestTime(self, time):
        """
        :type time: str
        :rtype: str
        """
        
        numbers = map(int, time.replace(":", ""))
        h, m = time.split(':')
        
        while True:
            m = int(m)+1
            
            if m == 60:
                m = "00"
                h = int(h)+1
            elif m < 10 and m > 0:
                m = "0" + str(m)
            else:
                m = str(m)
            
            if h == 24:
                h = "00"
            elif h < 10 and h > 0:
                h = "0" + str(h)
            else:
                h = str(h)
                
            if all(int(x) in numbers for x in h+m):
                return h + ":" + m