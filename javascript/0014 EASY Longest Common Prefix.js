/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(!strs || strs.length === 0) return "";

    let i = 0
    let answer = [];
    let done = false

    while(!done){
        for(s of strs){

            if(!answer[i]){
                answer[i] = s[i];
            }

            if(s[i]!==answer[i] || !s[i] || s[i] === ""){
                answer[i]="";
                done=true;
                break;
            }
        }
        i++;
    }

    return answer.join("");

};
