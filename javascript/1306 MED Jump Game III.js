/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visited = {};
    const indexes = [start];

    while(indexes.length){
        let index = indexes.pop();

        if(arr[index]===0){
            return true;
        }

        visited[index] = true;

        let forward = index + arr[index];
        let backward = index - arr[index];

        if(forward<arr.length && !visited[forward]){
            indexes.push(forward)
        }
        if(backward>=0 && !visited[backward]){
            indexes.push(backward)
        }
    }
    return false;
};
