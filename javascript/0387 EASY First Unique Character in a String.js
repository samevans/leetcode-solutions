/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charMap = {};
    for(let i=0;i<s.length;i++){
        if(!!charMap[s[i]] || charMap[s[i]]===0){
            charMap[s[i]] = -1;
        }else{
            charMap[s[i]] = i;
        }
    }

    let min = Infinity;

    for(let key of Object.keys(charMap)){
        let val = charMap[key]
        if(val!==-1 && val < min){
            min = val;
        }
    }

    return min === Infinity ? -1 : min;

};
