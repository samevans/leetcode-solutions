/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const groups = {};

    // O(n)
    for(let i=0;i<groupSizes.length;i++){
        let group = groupSizes[i];
        if(!groups[group]) groups[group]=[];

        groups[group].push(i);
    }

    const output = [];

    for(const key of Object.keys(groups)){
        let people = groups[key];
        let i = 0;
        //O(n)
        while(i<people.length){
            let intKey = parseInt(key);
            output.push(people.slice(i,i+intKey));
            i+=intKey;
        }
    }

    return output;

};
