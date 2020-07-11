/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    const visited = {};
    let answer = 0;
    for(var row=0;row<grid.length;row++){

        for(var col=0;col<grid[0].length;col++){
            if(grid[row][col]==='1' && !visited[row+'-'+col]){
                dfs(visited, grid, [row,col]);
                answer++;
            }
        }

    }
    return answer
};

var dfs = function(visited, grid, curr){

    let row = curr[0], col = curr[1];
    visited[row+'-'+col] = 1;

    let cells = [[row-1,col],[row,col-1],[row+1,col],[row,col+1]];
    for(let cell of cells){
        if(isValid(grid,visited,cell)){
            dfs(visited, grid, cell);
        }
    }
}

var isValid = function(grid, visited, cell){
    let row=cell[0], col=cell[1];
    if(row<0){
        return false;
    }
    else if(col<0){
        return false;
    }
    else if(row>grid.length-1){
        return false;
    }
    else if(col>grid[0].length-1){
        return false;
    }
    else if(grid[row][col]==='0'){
        return false;
    }
    else if(visited[row+'-'+col]){
        return false;
    }

    return true;
}
