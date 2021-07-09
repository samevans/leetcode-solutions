/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = []

    for(let i=0; i<intervals.length; i++){
        let interval = intervals[i]
        
        // if overlaps
        if(Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
            newInterval = [
                Math.min(interval[0], newInterval[0]),
                Math.max(interval[1], newInterval[1])
            ]
            continue
        }
        
        // if under
        if(newInterval[1] < interval[0]){
            result.push(newInterval, ...intervals.slice(i))
            return result
        }
        
        result.push(interval)
    }
    
    result.push(newInterval)
    return result
};