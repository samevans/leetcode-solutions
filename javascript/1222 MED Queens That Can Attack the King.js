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
    
    for(let i of [-1,0,1]){
        for(let j of [-1,0,1]){
            let queen = traverse(king, queenSet, i, j)
            if(queen){
                result.push(queen)
            }
        }
    }
    
    return result
};

var traverse = function(king, queenSet, directionX, directionY) {
    for(let row=king[0]; row>=0 && row<8; row+=directionX) {
        for(let col=king[1]; col>=0 && col<8; col+=directionY) {
            if(queenSet.has(row+"-"+col)){
                queenSet.delete(row+"-"+col)
                return [row, col]
            }
        }
    }
    return undefined
}

