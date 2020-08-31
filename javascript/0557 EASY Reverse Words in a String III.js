/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let output = [];
    for(const word of s.split(" ")){
        output.push(reverseWord(word));
    }
    return output.join(" ");
};

var reverseWord = function(s) {
    s = s.split("");

    let left=0;
    let right=s.length-1;

    while(left<right){
        [s[left],s[right]]=[s[right],s[left]];
        left++;
        right--;
    }

    return s.join("");
}
