# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        
        if not head:
            return []
        
        linkedlist = [head.val]
        current = head
        
        while current.next is not None:
            current = current.next
            linkedlist.append(current.val)
            
        linkedlist = linkedlist[::-1] 
        new_head = ListNode(linkedlist[0])
        current = new_head
        for item in linkedlist[1:]:
            current.next = ListNode(item)
            current = current.next
            
        return new_head
        