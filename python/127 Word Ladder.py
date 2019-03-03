class Solution(object):
    def ladderLength(self, beginWord, endWord, wordList):
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: int
        """
        
        if endWord not in wordList:
            return 0
        
        possibilities = {}
        
        for word in wordList:
            for i, letter in enumerate(word):
                poss = possibilities.get(i,set())
                poss.add(letter)
                possibilities[i] = poss
        
        def bfs(word, count, visited):
            visited.add(word)
            
            if word == endWord:
                results.append(count)
                return
            
            for i in range(len(word)):
                for poss in possibilities[i]-set(word[i]):
                    new_word = word[:i] + poss + word[i+1:]
                    if new_word in wordList and new_word not in visited:
                        bfs(new_word, count+1, visited)
        
        results = []
        bfs(beginWord, 0, set())
        if not results:
            return 0
        print results
        return min(results)
        
        
                
        