class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        output = ""
        if not strs:
            return output
        
        i = 0
        while True:
            
            if i >= len(strs[0]):
                break
            new_string = strs[0][i]
            for s in strs:
                if i >= len(s) or new_string != s[i]:
                    break
            else:
                output = output + new_string
                i+=1
                continue
            break
        return output