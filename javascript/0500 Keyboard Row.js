/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let firstRow = new Set();
    let secondRow = new Set();
    let thirdRow = new Set();
    
    for(character of "qwertyuiop"){
        firstRow.add(character);
    }
    for(character of "asdfghjkl"){
        secondRow.add(character);
    }
    for(character of "zxcvbnm"){
        thirdRow.add(character);
    }
    
    
    let output = []
    for(word of words){
        let wLowerCase = word.toLowerCase()
        
        if(isRow(firstRow, wLowerCase) ||
            isRow(secondRow, wLowerCase) ||
            isRow(thirdRow, wLowerCase)
            ){
            output.push(word)
        }
    }
    
    return output;
};

var isRow = function(rowSet, word){
    for(let i=0; i<word.length; i++){
        if(!rowSet.has(word[i])){
            return false
        }
    }
    return true;
}