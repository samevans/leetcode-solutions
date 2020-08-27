/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let curr1 = l1, curr2 = l2;

    let head = new ListNode(null,null);
    let curr = head;

    while(!!curr1 || !!curr2){
        if(curr1 && (!curr2 || curr1.val<=curr2.val)){
            curr.next = new ListNode(curr1.val);
            curr1 = curr1.next;
        }
        else if(curr2 && (!curr1 || curr2.val<=curr1.val)){
            curr.next = new ListNode(curr2.val);
            curr2 = curr2.next;
        }

        curr = curr.next;
    }

    return head.next;
};
