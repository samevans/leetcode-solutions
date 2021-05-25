/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount+1).fill(Infinity)
    dp[0] = 0
    
    for(let i=0;i <= amount; i++){
        for(coin of coins){
            if(coin <= i){
                dp[i] = Math.min(dp[i-coin]+1, dp[i])
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount]
    
};