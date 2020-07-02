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
var middleNode = function(head) {

    let s = size(head);
    s = s%2===0 ? ((s/2)+1) : Math.ceil(s/2);

    let curr = head;
    let count = 0;
    while(curr){
        count++;
        if(count===s) return curr;
        curr = curr.next;
    }
};

// Returns size of linked list
var size = function(head) {
    let s = 0;
    let curr = head;
    while(curr){
        s++;
        curr=curr.next;
    }
    return s;
}
