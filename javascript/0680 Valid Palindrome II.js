/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    let left = 0, right = s.length-1;

    let deleted = false;
    while(left<right) {
        if(s[left]===s[right]){
            left+=1;
            right-=1;
        }
        else if(s[left+1]===s[right] && s[left+2]===s[right-1] && !deleted){
            left+=1;
            deleted=true;
        }
        else if(s[left]===s[right-1] && !deleted){
            right-=1;
            deleted=true;
        }
        else{
            return false;
        }
    }
    return true;

};
