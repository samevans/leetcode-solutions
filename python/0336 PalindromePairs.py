class Solution(object):
    def palindromePairs(self, words):
        """
        :type words: List[str]
        :rtype: List[List[int]]
        """
        
        word_dict = {}
        
        for index, word in enumerate(words):
            word_dict[word] = index
            
        
        result = set()
        
        for word_index, word in enumerate(words):
            for index in range(len(word)+1):
                prefix = word[:index]
                reverse_prefix = prefix[::-1]

                suffix = word[index:]
                reverse_suffix = suffix[::-1]
                
                if reverse_prefix == prefix and reverse_suffix in word_dict:
                    rev_index = word_dict[reverse_suffix]
                    if rev_index != word_index:
                        result.add((rev_index, word_index))
        
                if reverse_suffix == suffix and reverse_prefix in word_dict:
                    rev_index = word_dict[reverse_prefix]
                    if rev_index != word_index:
                        result.add((word_index, rev_index))
                        
        return list(result)