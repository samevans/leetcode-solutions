/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let courses = {};
    for(let i=0;i<numCourses;i++){
        courses[i]=[];
    }

    for(const [c,p] of prerequisites){
        courses[c].push(p);
    }

    let output = [[]];
    dfs(output, courses, numCourses)
    return output[0];
};

var dfs = function(output, courses, numCourses, selected=[], visited= new Set()){

    if(selected.length===numCourses){
        output[0]=selected;
        return true;
    }

    for(let i=0;i<numCourses;i++){
        if(!visited.has(i)){
            let prereqs = courses[i.toString()];

            let counter=0;
            for(const prereq of prereqs){
                if(visited.has(prereq)){
                    counter++
                }else{
                    break;
                }
            }

            if(counter===prereqs.length){
                visited.add(i)
                if(dfs(output,courses,numCourses,selected.concat([i]),visited)){
                    return true;
                }
            }

        }
    }
    return false;

}
