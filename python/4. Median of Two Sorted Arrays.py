class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        length = len(nums1) + len(nums2)
        k = length/2
        
        if length%2!=0:
            return self.kth(nums1, nums2, k)
        else:
            return 1.0*(self.kth(nums1, nums2, k) + self.kth(nums1,nums2,k-1))/2

    def kth(self, a, b, k):
        if len(a)==0:
            return b[k]
        if len(b)==0:
            return a[k]
        
        mid_a, mid_b = len(a)/2, len(b)/2
        midval_a, midval_b = a[mid_a], b[mid_b]
        
        if mid_a + mid_b < k:
            if midval_a > midval_b:
                return self.kth(a, b[mid_b+1:], k-mid_b-1)
            else:
                return self.kth(a[mid_a+1:], b, k-mid_a-1)
        else:
            if midval_a > midval_b:
                return self.kth(a[:mid_a],b,k)
            else:
                return self.kth(a,b[:mid_b],k)