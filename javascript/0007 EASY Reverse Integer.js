/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let answer = parseInt(x.toString().split("").reverse().join(""));
    if(answer > ((2**31)-1) || answer < -(2**31)) return 0;
    return x<0?-answer:answer;
};




/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    if(!x) return 0;

    let stack = x.toString().split(""), arr = [];

    while(stack.length>0){
        arr.push(stack.pop());
    }

    let answer = parseInt(arr.join(""));
    if(answer > ((2**31)-1) || answer < -(2**31)) return 0;

    return x<0?-answer:answer;
};
