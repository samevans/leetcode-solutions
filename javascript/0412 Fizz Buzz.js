/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

    const answer = [];
    for(var i=1;i<=n;i++){

        let string = "";

        if(i%3===0) string+="Fizz";
        if(i%5===0) string+="Buzz";
        if(string==="") string+=i.toString()

        answer.push(string);
    }
    return answer;
};
