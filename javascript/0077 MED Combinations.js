/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const answer = [];
    solve(answer, n, k);
    return answer;
};

var solve = function(answer, n, k, combo=[], num=1){

    if(combo.length === k){
        answer.push(combo)
        return;
    }

    for(var i=num; i<=n; i++) {
        if(isValid(combo, i, n, k)){
            solve(answer,n,k,combo.concat([i]),num+1);
        }
    }

}

var isValid = function(combo, nextVal, n, k){

    if(combo.length===0 && nextVal===n && k!==1){
        return false;
    }
    else if(combo.includes(nextVal)){
        return false;
    }
    else if(nextVal<combo[combo.length-1]){
        return false;
    }

    return true;
}
