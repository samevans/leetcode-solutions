/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    let result = []
    
    let queenSet = new Set()
    for(let [x,y] of queens){
        queenSet.add(x+"-"+y)
    }
    
    var traverse = function(x, y, directionX, directionY) {
        if(x<0 || y<0 || x>=8 || y>=8) return
        if(queenSet.has(x+"-"+y)){
            result.push([x,y])
            return
        }
        traverse(x+directionX, y+directionY, directionX, directionY)
    }
    
    for(let i of [-1,0,1]){
        for(let j of [-1,0,1]){
            if(i==0 && j==0) continue
            traverse(king[0], king[1], i, j)
        }
    }
    
    return result
};