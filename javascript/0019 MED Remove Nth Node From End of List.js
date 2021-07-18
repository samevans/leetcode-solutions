/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 0
    let curr = head
    while(curr){
        count++
        curr = curr.next
    }
    
    let index = 0
    curr = head
    let prev
    while(curr){
        if(index === count-n){
            if(prev){
                prev.next = curr.next
            }else{
                head = curr.next
            }
        }
        
        prev = curr
        curr = curr.next
        index++
    }
    
    return head
};