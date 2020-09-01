/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedDict = {}
    for(let bannedWord of banned){
        bannedDict[bannedWord] = 1;
    }

    const count = {}
    let words = paragraph.toLowerCase().replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, " ").split(" ");
    for(let word of words){
        if(!bannedDict[word]){
            if(!count[word]) count[word] = 0;
            count[word]++;
        }
    }

    let output = undefined;
    for(let key of Object.keys(count)){
        if(!output || count[key] > count[output]){
            output = key;
        }
    }
    return output;
};
