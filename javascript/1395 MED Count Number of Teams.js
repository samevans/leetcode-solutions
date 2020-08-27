/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    const output = [0];
    solver(output,rating);
    return output[0];
};

var solver = function(output, rating, selection=[]){
    if(selection.length===3){
        output[0]++;
        return;
    }

    for(let i=0;i<rating.length;i++){
        if(isValid(selection, rating[i])){
            let newSelection = selection.concat([rating[i]])
            solver(output, rating.slice(i+1), newSelection);
        }
    }
}

var isValid = function(selection, rating){

    // Nothing in selection;
    if(!selection.length){
        return true;
    }

    // Only one thing in selection, nothing can be bad
    if(selection.length===1){
        return true
    }

    let len = selection.length-1;

    // Item previous is lower so we need to be ascending
    if(selection[len]>selection[len-1]){
        return rating>selection[len];
    }

    // Item previous is higher so we need to be descending
    if(selection[len]<selection[len-1]){
        return rating<selection[len];
    }

    return false;
}
