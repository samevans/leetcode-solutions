/**
 * Definition for isBadVersion()
 * blahcadasc
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let first=1, last=n;
        let min;

        while(first<=last){
            let mid = Math.floor((first+last)/2);

            if(isBadVersion(mid)){
                min=mid;
                last=mid-1;
            }else{
                first=mid+1;
            }
        }

        return min;
    };
};