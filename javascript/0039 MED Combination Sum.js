/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let answer = [];
    solve(answer, candidates, target);
    return answer;
};

var solve = function(answer, candidates, target, combo=[], sum=0){

    if(sum===target){
        answer.push(combo)
        return;
    }

    for(item of candidates){
        if(isValid([...combo, item], target)){
            solve(answer, candidates, target, combo.concat(item), sum+item);
        }
    }

}

var isValid = function(nextCombo, target){

    if(nextCombo.length>1){
        let len = nextCombo.length-1
        if(nextCombo[len]<nextCombo[len-1]){
            return false;
        }
    }

    const arrSum = nextCombo.reduce((a,b) => a + b, 0)

    if(arrSum<=target){
        return true;
    }

    return false;
}
