/**
https://leetcode.com/problems/n-queens/

 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const answer = []
    solve(answer, n)

    for(var i=0;i<answer.length;i++){
        for(var j=0;j<n;j++){
            let arr = Array(n);
            arr[answer[i][j]] = 'Q';
            answer[i][j] = arr.join('.');
        }
    }

    return answer;
};

var solve = function(answer, n, row = 0, colsPlaced = []){
    if(row===n){
        answer.push([...colsPlaced]);
    }else{
        for(var col=0;col<n;col++){
            colsPlaced.push(col);
            if(isValid(colsPlaced)) {
                solve(answer, n, row+1, colsPlaced);
            }
            colsPlaced.pop()
        }
    }
}

var isValid = function(colsPlaced) {
    let added = colsPlaced.length - 1;
    for(var i=0;i<added;i++){
        var diff = Math.abs(colsPlaced[i]-colsPlaced[added]);
        if(diff===0||diff===added-i){
            return false;
        }
    }
    return true;
}
