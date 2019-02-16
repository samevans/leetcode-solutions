# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """

        heap = []
        
        for node in lists:
            if node is None:
                continue
            
            heapq.heappush(heap, node.val)
            heap.append(node.val)
            
            while node.next is not None:
                node = node.next
                heapq.heappush(heap, node.val)
                heap.append(node.val)
                
        if not heap:
            return []
        
        resultNode = ListNode(heapq.heappop(heap))
        
        for i in range(len(heap)):
            self.insertNode(resultNode, heapq.heappop(heap))
            
        return resultNode
    
    def insertNode(self, node, val):
        current = node
        while current.next is not None:
            current = current.next
        current.next = ListNode(val)
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """

        heap = []
        
        for node in lists:
            if node is None:
                continue
            
            heapq.heappush(heap, node.val)
            heap.append(node.val)
            
            while node.next is not None:
                node = node.next
                heapq.heappush(heap, node.val)
                heap.append(node.val)
                
        if not heap:
            return []
        
        resultNode = ListNode(heapq.heappop(heap))
        
        for i in range(len(heap)):
            self.insertNode(resultNode, heapq.heappop(heap))
            
        return resultNode
    
    def insertNode(self, node, val):
        current = node
        while current.next is not None:
            current = current.next
        current.next = ListNode(val)
