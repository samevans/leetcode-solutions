/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let alienDict = {}
    for(var i=0;i<order.length;i++){
        alienDict[order[i]]=i;
    }

    for(var i =1; i<words.length; i++){
        const curr = words[i], prev = words[i-1];
        let ptr = 0;
        while(!(alienDict[curr[ptr]]>alienDict[prev[ptr]])){
            if(!prev[ptr]){
                break;
            }
            else if(!curr[ptr]){
                return false;
            }
            else if(alienDict[curr[ptr]]<alienDict[prev[ptr]]){
                return false;
            }
            ptr++;
        }
    }
    return true;
};
