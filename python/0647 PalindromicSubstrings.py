class Solution(object):
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        dp = [1] * len(s)

        for i in range(1, len(s)):
            dp[i] += dp[i-1]

            for j in range(0, i):
                target = s[j:i+1]
                if target == target[::-1]:
                    dp[i] += 1

        return dp[-1]
