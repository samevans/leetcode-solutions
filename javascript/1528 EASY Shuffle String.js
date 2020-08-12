/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const hash = {};
    for(let i=0;i<indices.length;i++){
        hash[indices[i]]=s[i];
    }

    const output = [];
    for(let i=0;i<indices.length;i++){
        output.push(hash[i]);
    }

    return output.join("");
};
