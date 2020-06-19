/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = [];
    solve(answer,n)
    return answer;

};

var solve = function(answer, n, leftCount=0, rightCount=0, string="") {
    if(leftCount===n && rightCount===n){
        answer.push(string);
        return
    }

    if(leftCount!==n){
        solve(answer,n,leftCount+1,rightCount,string+"(")
    }
    if(rightCount<leftCount){
        solve(answer,n,leftCount,rightCount+1,string+")")
    }
}
