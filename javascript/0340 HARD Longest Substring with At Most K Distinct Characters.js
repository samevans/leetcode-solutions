/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {

    let max = 0;
    let left = 0;
    let right = 0;
    let seen = {};

    while(right<s.length){
        let val;

        if(Object.keys(seen).length>k){
            val = s[left];
            seen[val]--;
            if(seen[val]===0) delete seen[val]
            left++;
        }else{
            val = s[right];
            if(!seen[val]) seen[val]=0;
            seen[val]++;
            right++;
        }

        if(Object.keys(seen).length<=k){
            max = Math.max((right-left), max);
        }
    }

    return max;

};
