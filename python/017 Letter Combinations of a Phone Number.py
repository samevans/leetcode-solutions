class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        alphabet = {
            '2': "abc",
            '3': "def",
            '4': "ghi",
            '5': "jkl",
            '6': "mno",
            '7': "pqrs",
            '8': "tuv",
            '9': "wxyz"
        }
        
        results = []
        
        for digit in digits:
            if len(results) == 0:
                for char in alphabet[str(digit)]:
                    results.append(char)
            else:
                newResults = []
                for result in results:
                    for char in alphabet[str(digit)]:
                        newResults.append(result+char)
                        
                results = newResults
                
        return results