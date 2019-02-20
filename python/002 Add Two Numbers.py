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
        
        result = str(self.concatReverseLinkedList(l1) + self.concatReverseLinkedList(l2))[::-1]
        
        node = ListNode(int(result[0]))
        
        for i in result[1:]:
            self.insertNode(node, i)
        return node
    
        
    def insertNode(self, node, val):
        current = node
        while current.next is not None:
            current = current.next
        current.next = ListNode(val)
        
    def concatReverseLinkedList(self, linkedList):
        
        result = []
        result.append(linkedList.val)
        
        while linkedList.next is not None:
            linkedList = linkedList.next
            result.append(linkedList.val)
            
        return int("".join(map(str,result[::-1])))