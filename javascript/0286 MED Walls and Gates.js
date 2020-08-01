/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    for(let row=0;row<rooms.length;row++){
        for(let col=0;col<rooms[0].length;col++){
            if(!rooms[row][col]){
                dfs(rooms, row, col);
            }
        }
    }
};

var dfs = function(rooms, row, col, count=0) {
    if(row<0 || col<0 || row>=rooms.length || col>=rooms[0].length || rooms[row][col]<count){
        return;
    }

    rooms[row][col] = count;
    for(const [r,c] of [[row+1,col],[row-1,col],[row,col+1],[row,col-1]]){
        dfs(rooms, r, c, count+1)
    }
}
