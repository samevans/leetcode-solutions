/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    S = S.split("");
    let left = 0;
    let right = S.length-1;

    var regExp = /^[A-Za-z]+$/;

    while(left<right){
        if(!S[left].match(regExp)){
            left++;
        }
        else if(!S[right].match(regExp)){
            right--;
        }
        else{
            [S[left],S[right]] = [S[right],S[left]];
            left++;
            right--;
        }
    }

    return S.join("");
};
