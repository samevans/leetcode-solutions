/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    return solver(tiles);
};

var solver = function(tiles, selection="", seen={}){
    let solutions = 0;
    if(selection.length && !seen[selection]){
        seen[selection] = true
        solutions += 1;
    }
    else if(seen[selection]){
        return 0;
    }

    for(let i=0;i<tiles.length;i++){
        const newTiles = tiles.slice(0,i).concat(tiles.slice(i+1,tiles.length))
        solutions += solver(newTiles,selection+tiles[i],seen);
    }

    return solutions
}
