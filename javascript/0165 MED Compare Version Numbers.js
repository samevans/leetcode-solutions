/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const queue1 = version1.split(".");
    const queue2 = version2.split(".");

    while(queue1.length || queue2.length){

        let val1 = queue1.length ? parseInt(queue1.shift()) : 0;
        let val2 = queue2.length ? parseInt(queue2.shift()) : 0;

        if(val1>val2){
            return 1;
        }
        else if(val2>val1){
            return -1
        }
    }
    return 0;
};
