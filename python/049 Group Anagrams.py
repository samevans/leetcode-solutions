class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        anagrams = collections.defaultdict(list)
        
        for str in strs:
            anagrams["".join(sorted(str))] += [str]
            
        return anagrams.values()
