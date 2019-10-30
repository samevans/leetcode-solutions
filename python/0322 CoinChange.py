class Solution(object):
    def coinChange(self, coins, amount):
        """
        :type coins: List[int]
        :type amount: int
        :rtype: int
        """

        coin_count = [amount+1] * (amount+1)

        coin_count[0] = 0

        for p in range(1, amount+1):

            min_coins = coin_count[p]

            for coin in coins:
                if p-coin > -1:
                    min_coins = min(1 + coin_count[p-coin], min_coins)

            coin_count[p] = min_coins

        return coin_count[-1] if coin_count[-1] < (amount+1) else -1
