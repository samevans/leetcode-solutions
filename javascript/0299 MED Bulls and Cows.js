/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0
    let cows = 0
    
    let secretDict = {}
    let amount = {}
    for(let i=0; i<secret.length; i++){
        let char = secret[i]
        if(!secretDict[char]) secretDict[char] = new Set()
        secretDict[char].add(i)
        amount[char] = amount[char] + 1 || 1
    }
    
    guess = guess.split("")
    for(let i=0; i<guess.length; i++){
        let char = guess[i]
        if(secretDict[char]){
            if(secretDict[char].has(i)){
                bulls++
                amount[char]--
                guess[i] = "x"
            }
        }
    }
    
    for(let i=0; i<guess.length; i++){
        let char = guess[i]
        if(secretDict[char]){
            if(amount[char] > 0){
                cows++
                amount[char]--
            }
        }
    }
    
    return bulls + "A" + cows + "B"
};