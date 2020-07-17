/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let curr = null;
    let count;
    for(let i=0;i<chars.length;i++){
        while(curr===chars[i]){

            chars[i-(count-1)] = ""+(count+1);
            if(count>1) chars[i] = i===chars.length-1 ? null: chars[i+1]
            count++;
            i++
        }
        curr = chars[i];
        count = 1;
    }
};
