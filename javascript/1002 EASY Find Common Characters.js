/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {

    const wordCounts = [];
    for(const word of A){
        const counts = {};
        for(const c of word){
            if(!counts[c]) counts[c] = 0;
            counts[c]++;
        }
        wordCounts.push(counts);
    }

    const output = [];
    if(wordCounts.length){
        let first = wordCounts[0];

        for(const key of Object.keys(first)){
            for(let i=1;i<wordCounts.length;i++){
                let val = wordCounts[i][key];
                if(!val){
                    delete first[key];
                    break;
                }
                if(val<first[key]){
                    first[key]=val
                }
            }

            for(let j=0; j<first[key]; j++){
                output.push(key)
            }
        }
    }
    return output;

};
