/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let frequency = {}
    for(let num of arr) {
        frequency[num] = frequency[num] + 1 || 1 
    }
    
    let occurences = new Set()
    for(let key of Object.keys(frequency)){
        let val = frequency[key]
        if(occurences.has(val)){
            return false
        }
        occurences.add(val)
    }
    return true
};