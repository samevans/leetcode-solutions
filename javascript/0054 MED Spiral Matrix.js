/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    const nums = [];
    if(!matrix || !matrix.length) return nums;

    let top = 0;
    let bottom = matrix.length-1;
    let left = 0;
    let right = matrix[0].length-1;

    let size = matrix.length * matrix[0].length

    while(nums.length<size){
        for(let i=left;i<=right && nums.length<size;i++){
            nums.push(matrix[top][i]);
        }
        top++;

        for(let i=top;i<=bottom && nums.length<size;i++){
            nums.push(matrix[i][right]);
        }
        right--;

        for(let i=right;i>=left && nums.length<size;i--){
            nums.push(matrix[bottom][i]);
        }
        bottom--;

        for(let i=bottom;i>=top && nums.length<size;i--){
            nums.push(matrix[i][left]);
        }
        left++;
    }

    return nums;
};
