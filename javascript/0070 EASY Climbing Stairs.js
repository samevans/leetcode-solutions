/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = Array(n).fill(0)
    dp[0] = 1
    if(n>1){
        dp[1] = 2
    }
    for(let i=2; i<n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    return dp[dp.length-1]
};