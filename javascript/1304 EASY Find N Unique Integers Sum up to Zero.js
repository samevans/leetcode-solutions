/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const output = [];
    const added = {};
    let sum = 0;
    let num;
    for(let i=0;i<n-1;i++){
        while(!num || added[num]!==undefined){
            num = Math.floor(Math.random() * n) + -n  ;
        }
        sum+=num;
        added[num]=true;
        output.push(num);
    }

    output.push(-sum);

    return output;
};
