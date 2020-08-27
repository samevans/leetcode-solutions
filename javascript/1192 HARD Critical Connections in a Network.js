/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    const output = [];

    // First construct graph;
    const graph = {};
    for(let i=0;i<n;i++){
        graph[i]=[];
    }
    for(const [x,y] of connections){
        graph[x].push(y.toString());
        graph[y].push(x.toString());
    }

    for(const connection of connections){
        if(!isConnected(n, graph, connection)){
            output.push(connection);
        }
    }

    return output;
};

var isConnected = function(n, graph, connection){
    let [x,y] = connection;
    x=x.toString();
    y=y.toString();

    const nodesVisited = new Set();

    const stack = ['0'];
    while(stack.length){
        let curr = stack.pop();

        if(nodesVisited.has(curr)){
            continue;
        }
        nodesVisited.add(curr);

        let children = graph[curr];
        for(const child of children){
            if((child===x && curr===y) || (curr===x && child===y)){
                continue;
            }
            stack.push(child)
        }
    }
    return nodesVisited.size === n;
}
