/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visited = {};

    let curr = head;
    while(curr){
        visited[curr.val] = curr;
        if(curr.next && visited[curr.next.val]===curr.next) return true;
        curr = curr.next;
    }
    return false;
};
