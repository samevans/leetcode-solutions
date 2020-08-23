/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let result = [-1]
    solver(arr,result);
    return result[0];
};

var solver = function(arr, result, index=0, selection = ""){
    if(index==arr.length && uniqueCharCount(selection)>result[0]){
        result[0] = selection.length;
        return
    }
    else if(index==arr.length){
        return
    }

    solver(arr, result, index+1, selection);
    solver(arr, result, index+1, selection+arr[index]);
}

var uniqueCharCount = function(input){
    const count = new Set();

    for(const s of input){
        if(!count.has(s)) count.add(s);
        else return -1;
    }

    return count.size;
}
