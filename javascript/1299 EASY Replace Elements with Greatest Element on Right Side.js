/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -Infinity
    for(let i=arr.length-1;i>=0;i--){
        let temp = max;
        max = Math.max(max,arr[i]);
        arr[i]=temp;
    }
    arr[arr.length-1]=-1;
    return arr;
};
