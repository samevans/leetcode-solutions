/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {

    let copy = [...heights];
    copy.sort((a,b)=>a-b);

    let count = 0;

    for(let i=0;i<heights.length;i++){
        if(copy[i]!==heights[i]){
            count++;
        }
    }

    return count;
};
