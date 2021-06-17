/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set();
    for(let vowel of "aeiouAEIOU"){
        vowels.add(vowel);
    }
    
    let left = 0;
    let right = s.length-1;
    let characters = s.split("");
    
    while(left<right){
        while(left<right && !vowels.has(characters[left])) {
            left++;
        }
        while(left<right && !vowels.has(characters[right])) {
            right--;
        }
        
        [characters[left],characters[right]] = [characters[right],characters[left]]
        left++;
        right--;
    }
    
    return characters.join("");
};