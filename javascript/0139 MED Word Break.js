/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = Array(s.length).fill(false);

    for(let i=0;i<s.length;i++){
        for(const word of wordDict){
            let slice = s.slice(i+1-word.length, i+1);

            if(word === slice && ((i-word.length<0) || dp[i-word.length])){
                dp[i] = true;
            }

        }
    }
    return dp[dp.length-1];
};
