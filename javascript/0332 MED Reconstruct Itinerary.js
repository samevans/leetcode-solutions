/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let destinations = {}
    for(let [from, to] of tickets){
        if(!destinations[from]) destinations[from] = []
        if(!destinations[to]) destinations[to] = []
        destinations[from].push(to)
    }
    
    let output = []
    dfs(output, destinations, tickets)
    return output[0]
};

var dfs = function(output, destinations, tickets, selected=["JFK"]){
    if(tickets.length===0){
        if(!output.length){
            output.push(selected)
        }else{
            output[0] = output[0].join("") < selected.join("") ? output[0] : selected
        }
        return
    }
    
    let curr = selected[selected.length-1]
    for(let destination of destinations[curr]){
        for(let i=0; i<tickets.length; i++){
            if(tickets[i][0]===curr && tickets[i][1]===destination){
                dfs(
                    output, 
                    destinations, 
                    tickets.slice(0,i).concat(tickets.slice(i+1)), 
                    selected.concat([destination])
                )
            }
        }
    }
}