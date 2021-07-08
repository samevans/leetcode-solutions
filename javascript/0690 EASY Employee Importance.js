/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let employeeDict = {}
    
    for (let employee of employees) {
        employeeDict[employee.id] = [employee.importance, employee.subordinates]
    }
    
    let total = 0
    let stack = [employeeDict[id]]
    
    while(stack.length){
        let curr = stack.pop()
        total += curr[0]
        for(let subordinant of curr[1]){
            stack.push(employeeDict[subordinant])
        }
    }
    
    return total
};