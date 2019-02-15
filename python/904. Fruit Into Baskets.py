class Solution(object):
    def totalFruit(self, tree):
        """
        :type tree: List[int]
        :rtype: int
        """
        basket = collections.Counter()
        left = 0
        result = 0
        
        
        for right in range(len(tree)):
            basket[tree[right]]+=1
            
            while len(basket) > 2:
                basket[tree[left]]-=1
                if basket[tree[left]]<=0:
                    basket.pop(tree[left])
                left += 1
            
            result = max(result, sum(basket.values()))
            
        return result