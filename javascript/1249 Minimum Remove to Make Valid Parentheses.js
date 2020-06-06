/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {

    let stack = [], arr = s.split("");

    for(var i=0;i<arr.length;i++){
        if(arr[i]==="("){
            stack.push(i);
        }else if(arr[i]===")"){
            if(stack.length===0){
                arr[i]="";
            }else{
                stack.pop()
            }
        }
    }

    for(const i of stack){
        arr[i]="";
    }

    return arr.join("");

};
