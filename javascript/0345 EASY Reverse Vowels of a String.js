/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set();
    vowels.add("A");
    vowels.add("a");
    vowels.add("E");
    vowels.add("e");
    vowels.add("I");
    vowels.add("i");
    vowels.add("O");
    vowels.add("o");
    vowels.add("U");
    vowels.add("u");
    
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