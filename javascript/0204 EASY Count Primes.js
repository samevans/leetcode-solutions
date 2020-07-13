/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    count=0;
    for(let i=2;i<n;i++){
        if(i!==2 && i%2===0){
            continue;
        }
        else if(i!==3 && getSum(i)%3===0){
            continue;
        }
        else if(i!==5 && i%10===5){
            continue;
        }
        else if(i!==7 && i%7===0){
            continue
        }
        console.log(i)
        count++;
    }

    return count;
};

var getSum = function(number){
    let n = number
    let sum = 0;
    while(n){
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
