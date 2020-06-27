/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {

    let degree = 0;
    let curr = [0,0]

    let j=0;
    while(true){

        if(j>0 && curr[0]===0 && curr[1]===0) return true;
        else if(j===4) return false;

        for(i of instructions){
            if(i==="L") degree-=90
            else if(i==="R") degree+=90
            else{
                if(degree===0) curr[1]+=1;
                else if (degree===180) curr[1]-=1;
                else if(degree===270) curr[0]-=1
                else if(degree===90) curr[0]+=1
            }

            if(degree===360) degree=0;
            else if(degree===-90) degree=270
        }
        j++;
    }
};
