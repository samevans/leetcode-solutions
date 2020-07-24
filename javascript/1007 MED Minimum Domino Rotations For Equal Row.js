/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    const result = Math.min(
        numSwaps(A[0], A, B),
        numSwaps(B[0], A, B),
        numSwaps(A[0], B, A),
        numSwaps(B[0], B, A)
    )
    return result === Infinity ? -1 : result;
};

var numSwaps = function(target, A, B){
    let num = 0;

    for(let i=0;i<A.length;i++){

        if(A[i]!==target && B[i]!==target){
            return Infinity
        }
        else if(A[i]!==target){
            num++;
        }

    }
    return num;

}
