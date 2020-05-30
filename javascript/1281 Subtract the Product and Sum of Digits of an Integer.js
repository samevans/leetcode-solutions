/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

    let nString = n.toString();

    let first = parseInt(nString[0]);

    let product = first;
    let sum = first;
    for(var i=1;i<nString.length;i++){
        let val = parseInt(nString[i]);

        product=product*val;
        sum+=val;
    }

    return product-sum;

};
