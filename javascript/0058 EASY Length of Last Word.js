/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wordList = s.split(" ");

    let index = 0;

    for(var i=wordList.length-1;i>=0;i--){
        if(wordList[i]!==""){
            index = i;
            break;
        }
    }

    return wordList[index].length
};
