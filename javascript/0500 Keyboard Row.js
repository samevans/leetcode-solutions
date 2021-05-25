/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let firstRow = new Set();
    let secondRow = new Set();
    let thirdRow = new Set();
    
    addToSet(firstRow, "qwertyuiop");
    addToSet(secondRow, "asdfghjkl");
    addToSet(thirdRow, "zxcvbnm");
    
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

var addToSet = function(rowSet, row){
    for(character of row){
        rowSet.add(character);
    }
}

var isRow = function(rowSet, word){
    for(character of word){
        if(!rowSet.has(character)){
            return false
        }
    }
    return true;
}