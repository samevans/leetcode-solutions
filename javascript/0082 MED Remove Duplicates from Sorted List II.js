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
    const items = {};

    while(!!curr){
        if(!items[curr.val]) items[curr.val]=0;
        items[curr.val]++;
        curr=curr.next;
    }

    curr = head;
    let prev = null;
    while(!!curr){
        if(items[curr.val]>1){
            if(!!prev){
                prev.next = curr.next
            }else{
                head = curr.next
            }
        }else{
            prev = curr;
        }
        curr = curr.next
    }

    return head
};
