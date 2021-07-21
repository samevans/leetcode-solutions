/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    let dp = Array(n).fill(0)
    dp[0] = k
    if(n>1){
        dp[1] = k*k
    }
    
    for(let i=2; i<n; i++){
        dp[i] = (k-1) * (dp[i-1] + dp[i-2])
    }
    
    return dp[dp.length-1]
};