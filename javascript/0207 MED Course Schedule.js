/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let courses = {};
    for(let i=0;i<numCourses;i++){
        courses[i]=[];
    }

    for(const [c,p] of prerequisites){
        courses[c].push(p);
    }

    return dfs(courses, numCourses)
};

var dfs = function(courses, numCourses, selected=[], visited= new Set()){

    if(selected.length===numCourses){
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
                if(dfs(courses,numCourses,selected.concat([i]),visited)){
                    return true;
                }
            }

        }
    }
    return false;

}