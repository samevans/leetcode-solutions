/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const color = image[sr][sc];

    const visited = new Set();
    const stack = [[sr, sc]];
    while(stack.length){
        let [row,col] = stack.pop();

        if(!isValid(image, visited, color, row, col)) {
            continue;
        }

        visited.add(row+"_"+col);

        if(image[row][col]===color){
            image[row][col] = newColor;
        }

        const cells = [[row+1,col],[row,col+1],[row-1,col],[row,col-1]];
        for(let cell of cells){
            stack.push(cell);
        }
    }
    return image
};

var isValid = function(image, visited, color, row, col){
    if(visited.has(row+"_"+col)){
        return false;
    }
    else if(row<0){
        return false;
    }
    else if(col<0){
        return false;
    }
    else if(row>=image.length){
        return false;
    }
    else if(col>=image[0].length){
        return false;
    }
    else if(image[row][col]!==color){
        return false;
    }
    return true;
}
