/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    let best = 0;
    const visited = {};

    for(var row=0;row<grid.length; row++){
        for(var col=0;col<grid[0].length; col++){
            if(grid[row][col]===1 && !visited[row+'-'+col]){
                best = Math.max(best, dfs(grid, visited, Object.freeze([row,col])));
            }

        }
    }
    return best

};

var dfs = function(grid, visited, cell) {

    let size = 0;
    let stack = [cell];

    while(stack.length>0){
        let curr = stack.pop();
        let row=curr[0], col=curr[1];

        if(visited[row+'-'+col]) continue;

        size++;
        visited[row+'-'+col] = 1;

        if(isValid(grid, visited, row-1, col)){
            stack.push(Object.freeze([row-1,col]));
        }
        if(isValid(grid, visited, row, col-1)){
            stack.push(Object.freeze([row,col-1]));
        }
        if(isValid(grid, visited, row+1, col)){
            stack.push(Object.freeze([row+1,col]));
        }
        if(isValid(grid, visited, row, col+1)){
            stack.push(Object.freeze([row,col+1]));
        }

    }
    return size;

}

var isValid = function(grid, visited, row, col){

    if(row<0 || col <0){
        return false;
    }
    else if(row>=grid.length || col>=grid[0].length){
        return false
    }
    else if(visited[row+'-'+col]){
        return false;
    }
    else if(grid[row][col]===1)

    return true;
}
