/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            if(grid[row][col]){
                return dfs(grid, row, col);
            }
        }
    }
};

var dfs = function(grid, row, col){

    let res = 0;
    const visited = {};
    const stack = [[row,col]];

    while(stack.length){
        let curr = stack.pop();
        let r=curr[0], c=curr[1];

        if(visited[r+"_"+c]) continue
        else if(r<0 || c<0 || r>=grid.length || c>=grid[0].length || grid[r][c]===0){
            res++;
            continue;
        }

        visited[r+"_"+c] = 1
        let cells = [[r+1,c],[r-1,c],[r,c+1],[r,c-1]];
        for(let cell of cells){
            stack.push(cell)
        }
    }
    return res;

}
