/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let maxGold = 0;
    const visited = {};
    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            if(grid[row][col]!==0){
                maxGold = Math.max(goldRush(grid,row,col),maxGold);
            }
        }
    }
    return maxGold;
};

var goldRush = function(grid,r,c){
    let goldCollected = 0;
    const stack = [[r,c,grid[r][c],{}]];

    while(stack.length){
        let [row,col,gold,visited] = stack.pop();

        if(visited[row+'-'+col]) continue;
        visited[row+'-'+col] = true;

        goldCollected = Math.max(goldCollected,gold);

        const cells = [
            [row,col-1],
            [row,col+1],
            [row-1,col],
            [row+1,col]
        ];

        for(const [newRow,newCol] of cells){
            if(
                newRow>=0
                && newCol>=0
                && newRow<grid.length
                && newCol<grid[0].length
                && grid[newRow][newCol] !== 0
                && !visited[newRow+'-'+newCol]
            ){
                stack.push([newRow,newCol,gold+grid[newRow][newCol],{...visited}])
            }
        }

    }
    return goldCollected;
}
