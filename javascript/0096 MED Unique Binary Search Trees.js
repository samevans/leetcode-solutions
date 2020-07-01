/**
 * @param {number} n
 * @return {number}
 */
let cache = new Map()
let numTrees = function(n) {
    if(n <= 1) return 1
    if(cache.has(n)) return cache.get(n)
    let count = 0
    for(let i=1;i<=n;i++) {
        count += numTrees(i-1) * numTrees(n-i)
    }
    cache.set(n,count)
    return count
};
