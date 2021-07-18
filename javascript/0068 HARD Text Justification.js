/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    
    let result = []
    getWords(words, maxWidth, result)
    
    for(let i=0; i<result.length; i++){
        let line = result[i]
        result[i] = adjustLine(line, maxWidth, i===result.length-1)
    }
    
    return result
};

var adjustLine = function(line, maxWidth, last){
    if(line.split(" ").length === 1 || last){
        return line + " ".repeat(maxWidth-line.length)
    }
    
    line = line.split("")
    
    let count=1
    while(line.length < maxWidth){
        let i = 0
        while(i<line.length){
            if(line[i] === " "){
                line = line.slice(0,i).concat([" "]).concat(line.slice(i))
                i+=count
            }
            if(line.length >= maxWidth) break
            i++
        }
        count++
    }
    
    return line.join("")
}

var getWords = function(words, maxWidth, result) {
    let curr = ""
    for(let word of words){
        if(curr.length && curr.length + word.length + 1 > maxWidth) {
            result.push(curr)
            curr = ""
        } 
        else if(curr.length) {
            curr += " "
        }
        curr += word
    }
    result.push(curr)
}