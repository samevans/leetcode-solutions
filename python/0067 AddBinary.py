class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        
        answer = ""
        
        last = 0
        
        while len(a) > 0 or len(b) > 0 :
            a_last = 0
            if len(a) > 0:
                a_last = int(a[len(a)-1])
                a = a[:len(a)-1]
            
            b_last = 0
            if len(b) > 0:
                b_last = int(b[len(b)-1])
                b = b[:len(b)-1]
            
            if a_last + b_last + last == 0:
                answer = "0" + answer 
                
            elif a_last +b_last + last == 1:
                answer = "1" + answer 
                
            elif a_last + b_last + last == 2:
                answer = "0" + answer
                last = 1
                continue
            
            elif a_last + b_last + last == 3:
                answer = "1" + answer 
                last = 1
                continue
            last = 0
        if last == 1:
            answer = "1" + answer
            
        return answer