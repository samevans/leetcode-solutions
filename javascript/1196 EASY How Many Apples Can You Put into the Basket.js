/**
 * @param {number[]} arr
 * @return {number}
 */
var maxNumberOfApples = function(arr) {
    arr = arr.sort((a,b)=>a-b)
    
    let basket = 5000
    let index = 0
    while(index<arr.length){
        if(basket-arr[index] <=0){
            break
        }
        basket-=arr[index]
        index++
    }
    return index
};