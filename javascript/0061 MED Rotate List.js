/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    let curr = head;
    let prev = null;
    let stack = []
    
    if(curr && curr.next){
        while(curr) {
            stack.push([curr,prev])
            if(!curr.next) {
                for(let i =0; i<k && stack.length; i++){
                    [curr,prev] = stack.pop()
                    if(prev){
                        prev.next = null
                    }
                    curr.next = head
                    head = curr;
                    stack.unshift([curr,prev])
                }
                break;
            }
            else{
                prev = curr
                curr = curr.next
            }
        }
    }
    
    return head;
    
};