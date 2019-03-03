class Solution(object):
    def getHint(self, secret, guess):
        """
        :type secret: str
        :type guess: str
        :rtype: str
        """
        bulls = []
        cows = 0
        
        for i in range(len(secret)):
            if secret[i] == guess[i]:
                bulls.append(i)
        
        for i in bulls[::-1]:
            secret = secret[:i] + secret[i+1:]
            guess = guess[:i] + guess[i+1:]    
        
        for item in guess:
            if item in secret:
                cows+=1
                index = secret.index(item)
                secret = secret[:index] + secret[index+1:]
                
        return str(len(bulls)) + "A" + str(cows) + "B"