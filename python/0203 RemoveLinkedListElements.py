# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def removeElements(self, head, val):
        """
        :type head: ListNode
        :type val: int
        :rtype: ListNode
        """
        
        if not head:
            return None
        
        while head.val == val:
            if head.next:
                head = head.next
            else:
                return None
            
        current = head
        while current.next is not None:
            if current.next.val == val:
                if current.next.next:
                    current.next.val, current.next.next = current.next.next.val, current.next.next.next
                else:
                    current.next = None
            else:
                current = current.next
        
        return head
            
        