/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {

    const alphaDict = {}, sDict = {}
    for(var i=1;i<27;i++){
        alphaDict["abcdefghijklmnopqrstuvwxyz"[i-1]] = i
    }

    for(c of s){
        if(!sDict[alphaDict[c]]) sDict[alphaDict[c]] = [];
        sDict[alphaDict[c]].push(c);
    }

    let result = "";
    while(Object.keys(sDict).length>0){

        for(k of Object.keys(sDict)){
            result += sDict[k].pop()
            if(sDict[k].length === 0) delete sDict[k];
        }
        for(k of Object.keys(sDict).reverse()){
            result += sDict[k].pop()
            if(sDict[k].length === 0) delete sDict[k];
        }
    }

    return result;
};
