/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    // First create a dict of all the cells that contain oranges
    let oranges = {};
    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            if(grid[row][col]===1) oranges[row+"_"+col] = 1;
        }
    }

    let minutes = 0;
    while(true){
        const rotting = [];

        // Go through all current oranges and see if they will rot this round
        for(key of Object.keys(oranges)){
            let cell = key.split("_");
            let row=parseInt(cell[0]), col=parseInt(cell[1]);
            if(isRotting(grid,row,col)){
                rotting.push([row,col]);
            }
        }

        if(!rotting.length){
            // If oranges still exist, this is impossible
            if(Object.keys(oranges).length) return -1
            else break;
        }

        // Change oranges to rotting and remove from dict
        for(r of rotting){
            grid[r[0]][r[1]] = 2;
            delete oranges[r[0]+"_"+r[1]];
        }
        minutes++;
    }
    return minutes;
};

var isRotting = function(grid,row,col) {
    if(row>0 && grid[row-1][col]===2) return true
    else if(row<grid.length-1 && grid[row+1][col]===2) return true;
    else if(col>0 && grid[row][col-1]===2) return true
    else if(col<grid[0].length-1 && grid[row][col+1]===2) return true;
    return false;
}
