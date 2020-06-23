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
                dfs(visited, grid, Object.freeze([row,col]));
                answer++;
            }
        }

    }
    return answer
};

var dfs = function(visited, grid, curr){

    let stack=[curr];

    while(stack.length>0){
        let curr = stack.pop();
        let row = curr[0], col = curr[1];

        if(visited[row+'-'+col]) continue;

        visited[row+'-'+col] = 1;

        if(row>0 && grid[row-1][col]==='1' && !visited[(row-1)+'-'+col]){
            stack.push(Object.freeze([row-1,col]));
        }
        if(col>0 && grid[row][col-1]==='1' && !visited[row+'-'+(col-1)]){
            stack.push(Object.freeze([row,col-1]));
        }
        if(row<grid.length-1 && grid[row+1][col]==='1' && !visited[(row+1)+'-'+col]){
            stack.push(Object.freeze([row+1,col]));
        }
        if(col<grid[0].length-1 && grid[row][col+1]==='1' && !visited[row+'-'+(col+1)]){
            stack.push(Object.freeze([row,col+1]));
        }
    }
}
