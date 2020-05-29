/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    romanDict = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
        "IV" : 4,
        "IX" : 9,
        "XL" : 40,
        "XC" : 90,
        "CD" : 400,
        "CM" : 900
    };

    let result = 0;

    for(var i=0;i<s.length;i++) {

        if(i<s.length-1){
            let val = s[i] + s[i+1];
            if(romanDict[val]) {
                result+=romanDict[val];
                i+=1;
                continue;
            }
        }

        result+=romanDict[s[i]];

    }

    return result;

};
