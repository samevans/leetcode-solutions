/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    
    const counts = {};

    for(let i=0;i<S.length;i++){
        let val = S[i];
        if(!counts[val]) counts[val]=0;
        counts[val]++;
    }

    const output=[];
    let currString = "";
    let curr = {}

    for(let i=0;i<S.length;i++){
        let val = S[i];
        currString+=val;

        if(!curr[val]) curr[val]=0;
        curr[val]++;

        if(curr[val]===counts[val]){
            delete curr[val];
            if(!Object.keys(curr).length){
                output.push(currString.length);
                currString="";
            }
        }

    }

    return output;

};
