/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    let answer = [];

    if(intervals.length!==0){
        // Sort intervals by start time
        intervals = intervals.sort((a,b)=>a[0]-b[0]);

        let previous = intervals[0]
        answer.push(previous);

        for(let i=1;i<intervals.length;i++){
            let current = intervals[i];
            if(current[0]<=previous[1]){
                previous[1] = Math.max(previous[1],current[1]);
            } else {
                answer.push(current);
                previous = current;
            }
        }
    }

    return answer

};
