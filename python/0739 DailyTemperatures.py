class Solution(object):
    def dailyTemperatures(self, T):
        """
        :type T: List[int]
        :rtype: List[int]
        """
        answer = [0]*len(T)
        stack = []
        
        for index, value in enumerate(T):
            while stack and T[stack[-1]] < value:
                i = stack.pop()
                answer[i] = index-i
            stack.append(index)
            
        return answer