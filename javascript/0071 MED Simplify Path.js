/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let paths = path.split("/")
    let pathStack = []
    for(let p of paths){
        if(p===".."){
            if(pathStack.length){
                pathStack.pop()
            }
        }
        else if(p.length && p !== ".") {
            pathStack.push(p)
        }
    }
    
    let simplifiedPath = "/" + pathStack.join("/")
    return simplifiedPath
};