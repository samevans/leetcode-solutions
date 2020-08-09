/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    let best = 0;
    let left = 0;
    while(left<tree.length){
        const fruits={}
        let right = left;

        while(right<tree.length){
            if(!fruits[tree[right]]){
                if(Object.keys(fruits).length===2) break;
                else fruits[tree[right]] = 0;
            }
            fruits[tree[right]]++;

            right++;
        }

        best = Math.max(best, Object.values(fruits).reduce((a,b)=>a+b))
        if(right===tree.length) break;
        left++;
    }

    return best
};
