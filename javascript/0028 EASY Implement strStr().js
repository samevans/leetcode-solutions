/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    if(needle === "") return 0;

    let left = 0;
    let index=-1

    while(left<haystack.length){

        if(haystack[left]===needle[0]){

            if(needle.length===1) return left;

            for(var i=1;i<needle.length;i++){
                if(haystack[left+i]!==needle[i]) break;
                else if(i===needle.length-1) return left
            }
        }

        left++;
    }

    return index;
};
