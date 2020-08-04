/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(const row of matrix){
        let last = row[row.length-1];
        if(target<=last){
            return binarySearch(row, target);
        }
    }
    return false;
};

var binarySearch = function(arr, t){
    let start = 0, end = arr.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(t<arr[mid]){
            end=mid-1;
        }
        else if(t>arr[mid]){
            start=mid+1;
        }
        else{
            return true;
        }
    }
    return false;
}
