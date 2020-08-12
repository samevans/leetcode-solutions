/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let best = 0;
    for(const candy of candies){
        best = Math.max(best,candy);
    }

    for(let i=0;i<candies.length;i++){
        candies[i] = (candies[i]+extraCandies)>=best;
    }

    return candies;
};
