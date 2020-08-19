/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const cities = {}
    for(const path of paths){
        cities[path[0]] = path[1]
    }

    let curr=paths[0][0];
    let prev = null;
    while(!!curr){
        prev = curr;
        curr = cities[curr];
    }

    return prev;
};
