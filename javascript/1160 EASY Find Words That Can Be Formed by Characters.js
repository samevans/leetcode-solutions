/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const dict = {};
    for(const c of chars){
        if(!dict[c]) dict[c] = 0;
        dict[c]++;
    }

    let output = 0;

    for(const word of words){
        const temp = {...dict};

        let isWord = true;
        for(const c of word){
            if(!temp[c] || temp[c]===0){
                isWord = false;
                break;
            }
            temp[c]--;
        }

        if(isWord){
            output+=word.length;
        }
    }
    return output;
};
