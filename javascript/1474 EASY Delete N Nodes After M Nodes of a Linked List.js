/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
    let curr = head;
    let prev = null;
    let countM = 0, countN = 0;

    while(!!curr){
        if(countM===m){
            if(countN<n){
                console.log(curr.val)
                if(!!curr.next){
                    curr.val = curr.next.val;
                    curr.next = curr.next.next;
                    countN++;
                    continue
                }else{
                    prev.next = null;
                    break;
                }
            }else{
                countN=0;
                countM=1;
            }
        }else{
            countM++;
        }
        prev = curr
        curr = curr.next;
    }

    return head;
};
