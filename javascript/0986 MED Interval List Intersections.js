/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    const output = [];
    if(B.length===0 || A.length===0) return output;

    let start = 0;
    for(a of A){

        while(B[start] && a[0] > B[start][1]){
            start++;
        }

        let b = start;
        while(B[b] && B[b][0] <= a[1]){
            output.push([Math.max(B[b][0], a[0]), Math.min(B[b][1],a[1])])
            b++;
        }

    }

    return output;
};
