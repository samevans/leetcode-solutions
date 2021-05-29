/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let maxSize = 0
    let groups = {}
    for(let i =1;i<=n;i++){
        let sum = 0
        let temp = i;
        while(temp>0){
            sum+=temp%10
            temp = Math.floor(temp/10)
        }
        if(!groups[sum]){
            groups[sum] = []
        }
        groups[sum].push(i)
        maxSize = Math.max(maxSize, groups[sum].length)
    }
    
    let result = 0;
    for(key of Object.keys(groups)){
        if(groups[key].length === maxSize){
            result++
        }
    }
    
    return result;
};