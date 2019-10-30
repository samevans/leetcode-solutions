# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        current1 = l1
        current2 = l2
        stored = 0
        
        current1.val += current2.val
        
        if current1.val > 9:
            stored = 1
            current1.val = current1.val%10
            
        while current1.next or current2.next:
            if not current1.next:
                current1.next= ListNode(0)
            if not current2.next:
                current2.next= ListNode(0) 
                
            current1 = current1.next
            current2 = current2.next
            
            current1.val += current2.val
            current1.val += stored
            stored = 0
        
            if current1.val > 9:
                stored = 1
                current1.val = current1.val%10
        
        if stored:
            current1.next = ListNode(stored)
            
        return l1
