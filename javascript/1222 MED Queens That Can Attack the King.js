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
    
    let directions = [-1,0,1]
    for(let dx of directions) {
        for(let dy of directions) {
            if(dx === 0 && dy === 0){
                continue
            }
            
            let x = king[0]
            let y = king[1]
            while(x+dx>=0 && y+dy>=0 && x+dx<8 && y+dy<8){
                x += dx
                y += dy
                if(queenSet.has(x+"-"+y)){
                    result.push([x,y])
                    break
                }
            }
        }
    }
    
    return result
};