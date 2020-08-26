/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {

    // for(let i=1;i<A.length;i++){
    //     let j=i;
    //     while(j>0 && Math.abs(A[j-1])>Math.abs(A[j])){
    //         [A[j],A[j-1]]=[A[j-1],A[j]]
    //         j--
    //     }
    // }

    A.sort((a,b)=>Math.abs(a)-Math.abs(b));

    for(let i=0;i<A.length;i++){
        A[i]=A[i]*A[i]
    }

    return A;

};
