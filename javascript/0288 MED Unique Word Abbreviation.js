/**
 * @param {string[]} dictionary
 */
class ValidWordAbbr {
    constructor(dictionary){
        this.abbreviations = {}
        for(let word of dictionary){
            let abbr = this.makeAbbr(word)
            if(!this.abbreviations[abbr]){
                this.abbreviations[abbr] = new Set()
            }
            this.abbreviations[abbr].add(word)
        }
    }
    
    makeAbbr(word){
        let mid = word.length <= 2 ? "" : ("" + word.length - 2)
        return word[0] + mid + word[word.length-1]
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    let abbr = this.makeAbbr(word)
    
    if(!this.abbreviations[abbr]){
        return true
    }
    else if(this.abbreviations[abbr].has(word) && this.abbreviations[abbr].size === 1){
        return true
    }
    return false
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */