/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = []
    for(let asteroid of asteroids){
        if(stack.length){
            let peek = stack[stack.length-1]
            if((peek<0 && asteroid>=0) || (asteroid<0 && peek>=0)){
                stack.pop()
                if(Math.abs(peek) === Math.abs(asteroid)){
                    continue
                } else {
                    asteroid = Math.abs(peek) > Math.abs(asteroid) ? peek : asteroid
                }
                
            }
        }
        stack.push(asteroid)
    }
    return stack
};
    
