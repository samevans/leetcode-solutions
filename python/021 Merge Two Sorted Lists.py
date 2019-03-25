# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        if not l1:
            return l2
        if not l2:
            return l1
        
        if l1.val <= l2.val:
            res = ListNode(l1.val)
            l1=l1.next
        else:
            res = ListNode(l2.val)
            l2=l2.next
                
        current = res
        while l1 or l2:
            if not l1:
                current.next = ListNode(l2.val)
                l2=l2.next
            elif not l2:
                current.next = ListNode(l1.val)
                l1=l1.next
            elif l1.val <= l2.val:
                current.next = ListNode(l1.val)
                l1=l1.next
            else:
                current.next = ListNode(l2.val)
                l2=l2.next
            current=current.next
        return res
