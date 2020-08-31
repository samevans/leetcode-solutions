/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    let prev
    while(!!curr){
        if(prev && curr.val===prev.val){
            prev.next = curr.next
        }else{
            prev = curr;
        }
        curr = curr.next
    }
    return head;
};
