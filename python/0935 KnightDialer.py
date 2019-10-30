class Solution(object):
    def knightDialer(self, N):
        """
        :type N: int
        :rtype: int
        """

        knight_dial = {
            "0": [4, 6],
            "1": [6, 8],
            "2": [7, 9],
            "3": [4, 8],
            "4": [0, 9, 3],
            "5": [],
            "6": [7, 1],
            "7": [6, 2],
            "8": [1, 3],
            "9": [4, 2],
        }

        def dial(n, number, res):
            if n == 1:
                res.add(number)
                return

            for next_spot in knight_dial[number[-1]]:
                dial(n-1, number+str(next_spot), res)

        results = set()
        for i in range(10):

            dial(N, str(i), results)
            print results

        return len(results)
