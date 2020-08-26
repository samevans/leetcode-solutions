/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let num = 0;

    for(let row=0;row<grid.length;row++){
        for(let col=grid[0].length-1;col>=0;col--){
            if(grid[row][col]>=0){
                break;
            }
            num++;
        }
    }

    return num;
};
