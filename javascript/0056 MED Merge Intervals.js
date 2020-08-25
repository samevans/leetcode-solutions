/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    let answer = [];
    if(intervals.length){
        intervals.sort((a,b)=>a[0]-b[0]);

        let prev=intervals[0];
        answer.push(prev);

        for(let i=0;i<intervals.length;i++){
            let curr = intervals[i];
            if(curr[0]<=prev[1]){
                prev[1] = Math.max(prev[1],curr[1])
            }else{
                answer.push(curr);
                prev=curr;
            }
        }
    }

    return answer;

};
