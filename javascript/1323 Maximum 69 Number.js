/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {

    let best = num;
    let numList = num.toString();

    for(var i=0;i<numList.length;i++){

        let cloneList = [...numList];
        cloneList[i] = cloneList[i] === "9" ? "6" : "9";

        let val = parseInt(cloneList.join(""));
        best = val > best ? val : best;
    }

    return best
};
