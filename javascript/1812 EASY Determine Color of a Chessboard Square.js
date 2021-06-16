/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let color = false
    for(let j of "abcdefgh"){
        let descending = j === "b" || j === "d" || j === "f" || j === "h"
        let i = descending ? 8 : 1
        while(i<9 && i>0){
            if(coordinates === j+i){
                return color
            }
            color = !color
            i = descending ? i-1 : i+1
        }
    }
};