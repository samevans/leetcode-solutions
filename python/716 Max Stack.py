class MaxStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []

    def push(self, x):
        """
        :type x: int
        :rtype: None
        """
        if len(self.stack) == 0 or x > self.stack[-1][1]:
            curr_max = x
        else:
            curr_max = self.stack[-1][1]
        
        self.stack.append((x, curr_max))

    def pop(self):
        """
        :rtype: int
        """
        result = self.stack.pop()[0]
    
        if len(self.stack) == 0:
            return result
    
        new_max = max(self.stack, key=lambda item:item[0])[0]
        old_val = self.stack[-1][0]
        
        self.stack[-1] = (old_val, new_max)
        
        return result
        

    def top(self):
        """
        :rtype: int
        """
        return self.stack[-1][0]

    def peekMax(self):
        """
        :rtype: int
        """
        return self.stack[-1][1]
    
        

    def popMax(self):
        """
        :rtype: int
        """
        index = len(self.stack)-1
        curr_max = self.stack[-1][1]
        
        while self.stack[index][0] != curr_max:
            index -= 1
            if index < 0:
                return False
        
        result = self.stack.pop(index)[0]
        
        if len(self.stack) == 0:
            return result
        
        new_max = max(self.stack, key=lambda item:item[0])[0]
        old_val = self.stack[-1][0]
        
        self.stack[-1] = (old_val, new_max)
        
        return result


# Your MaxStack object will be instantiated and called as such:
# obj = MaxStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.peekMax()
# param_5 = obj.popMax()