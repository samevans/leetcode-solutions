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
    let curr1 = l1;
    let curr2 = l2;
    let head = null;
    while(curr1 || curr2){
        let newNode;

        if(!curr1 || (curr2 && curr2.val < curr1.val)){
            newNode = {...curr2}
            curr2 = curr2.next;
        }else{
            newNode = {...curr1}
            curr1 = curr1.next;
        }

        if(!head){
            head = newNode;
            head.next = null;
        }
        else{
            let curr = head;
            while(!!curr.next) curr=curr.next;
            curr.next = newNode;
            curr.next.next = null;
        }
    }
    return head;
};
