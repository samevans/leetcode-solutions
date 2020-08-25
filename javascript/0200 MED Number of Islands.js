/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0;
    const visited = new Set();

    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            if(grid[row][col]==="1" && !visited.has(row+'-'+col)){
                dfs(grid,visited,row,col);
                num++;
            }
        }
    }

    return num;
};

var dfs = function(grid,visited,row,col){
    const stack = [[row,col]];

    while(stack.length){
        let [r,c] = stack.pop();

        if(visited.has(r+'-'+c)){
            continue;
        }
        visited.add(r+'-'+c);

        for(const [newRow, newCol] of [[r+1,c],[r-1,c],[r,c+1],[r,c-1]]){
            if(isValid(grid, newRow, newCol)){
                stack.push([newRow,newCol]);
            }
        }
    }
}

var isValid = function(grid, row, col){

    if(row<0){
        return false;
    }
    else if(col<0){
        return false;
    }
    else if(row>=grid.length){
        return false;
    }
    else if(col>=grid[0].length){
        return false;
    }
    else if(grid[row][col]!=="1"){
        return false;
    }

    return true;    
}
