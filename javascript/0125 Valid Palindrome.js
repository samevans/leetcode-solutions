/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let left = 0;
    let right = s.length-1;

    while(left<right){
        if(s[left] !== s[right]){
            return false;
        }
        else{
            left+=1;
            right-=1;
        }
    }
    return true;
};
