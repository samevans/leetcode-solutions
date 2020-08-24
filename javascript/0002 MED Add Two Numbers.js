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
var addTwoNumbers = function(l1, l2) {
    let curr1 = l1, curr2 = l2;

    let head, curr;

    let carryOver = 0;
    while(!!curr1 || !!curr2 || carryOver > 0){

        let val =
            (curr1 && curr1.val ? curr1.val : 0)
            + (curr2 && curr2.val ? curr2.val : 0)
            + carryOver;

        carryOver = 0;

        if(val>9){
            val = val.toString();
            carryOver = parseInt(val[0]);
            val = parseInt(val[1]);
        }

        if(!head){
            head = new ListNode(val)
            curr = head;
        }else{
            curr.next = new ListNode(val);
            curr = curr.next;
        }

        if(!!curr1) curr1 = curr1.next;
        if(!!curr2) curr2 = curr2.next;
    }

    return head;
};
