/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let count = 0
    let visited = new Set()
    
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(grid[row][col]===1 && !visited.has(row+"-"+col)){
                count = Math.max(count, dfs(grid, row, col, visited))
            }
        }
    }
    
    return count
};

var dfs = function(grid, row, col, visited) {
    let count = 0;
    let stack = [[row, col]]
    
    while(stack.length){
        let [r,c] = stack.pop()
        
        if(!isValid(grid, r, c, visited)){
            continue
        }
        
        count++
        visited.add(r+"-"+c)
        
        for(let next of [[r+1,c],[r-1,c],[r,c+1],[r,c-1]]){
            stack.push(next)
        }
    }
    
    return count
}

var isValid = function(grid, row, col, visited){
    if(row < 0) return false
    if(col < 0) return false
    if(row >= grid.length) return false
    if(col >= grid[0].length) return false
    if(grid[row][col] === 0) return false
    if(visited.has(row+"-"+col)) return false
    
    return true
}