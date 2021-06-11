/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let i = 0;
    while(i+1<arr.length){
        if(arr[i]<arr[i+1]){
            i++
        }else{
            break;
        }
    }
    
    if(i===0 || i===arr.length-1){
        return false
    }
    
    while(i+1<arr.length){
        if(arr[i]>arr[i+1]){
            i++
        }else{
            break;
        }
    }
    
    return i === arr.length-1
};