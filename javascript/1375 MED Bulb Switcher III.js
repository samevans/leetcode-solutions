/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {

    let moments = 0;
    let target = 0;
    let bulbs = 0;

    for(let i=0;i<light.length;i++){
        bulbs+=light[i];
        target+=(i+1);

        if(target===bulbs){
            moments++;
        }
    }

    return moments;

};
