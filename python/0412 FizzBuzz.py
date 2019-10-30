class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        answer = [i for i in range(1,n+1)] 
        for i in range(2,n,3):
            answer[i]="Fizz"
        for i in range(4,n,5):
            answer[i]="Buzz"
        for i in range(14,n,15):
            answer[i]="FizzBuzz"   
            
        return map(str,answer)