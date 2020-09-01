/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(let i=0;i<A.length;i++){
        let row = [];
        for(const col of A[i]){
            row.unshift(col===1 ? 0 : 1);
        }
        A[i] = row;
    }
    return A;
};
