class Codec:

    alphabet = string.ascii_letters + "0123456789"
    
    def __init__(self):
        self.code2string = {}
    
    def encode(self, strs):
        """Encodes a list of strings to a single string.
        
        :type strs: List[str]
        :rtype: str
        """
        
        code = "".join(random.choice(Codec.alphabet) for _ in range(6))
        if code not in self.code2string:
            self.code2string[code] = strs
        return code

    def decode(self, s):
        """Decodes a single string to a list of strings.
        
        :type s: str
        :rtype: List[str]
        """
        return self.code2string[s]        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))