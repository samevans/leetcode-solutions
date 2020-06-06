/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num,cnt=0) {

    if(num < 1){
        return cnt;
    }
    
    cnt+=1;

    return num % 2 === 0 ?
        numberOfSteps(num/2,cnt):
        numberOfSteps(num-1,cnt);

};
