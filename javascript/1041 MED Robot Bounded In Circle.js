/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let point = [0,0]
    let direction = 0
    
    for(let i=0; i<4; i++){
        for(let instruction of instructions){
            switch(instruction){
                case "G":
                    if(direction===90){
                        point[1]+=1
                    }
                    else if(direction===180){
                        point[0]-=1
                    }
                    else if(direction===270){
                        point[1]-=1
                    }
                    else if(direction===0){
                        point[0]+=1
                    }
                    break
                case "L":
                case "R":
                    direction = setDirection(direction,instruction)
                    break
                default:
                    break
            }
        }
        if(point[0]===0 && point[1]===0) return true
    }
    return false
};

var setDirection = function(direction, instruction){
    direction += instruction==="L" ? -90 : 90

    if(direction===-90){
        direction = 270
    }
    if(direction===360){
        direction = 0
    }
    return direction
}