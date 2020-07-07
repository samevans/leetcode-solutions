/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let k = lists.length;
    let dict = {};
    for(let i=0;i<k;i++){
        if(lists[i]) dict[i] = lists[i];
    }

    let head=null;
    while(Object.keys(dict).length){
        let best = null;

        for(key of Object.keys(dict)){
            if(!best || dict[key].val < best[1].val){
                best = [key, dict[key]];
            }
        }

        if(!head){
            head = {...best[1]};
            head.next = null;
        }else{
            let curr = head;
            while(!!curr.next){
                curr=curr.next;
            }
            curr.next = {...best[1]};
            curr.next.next = null;
        }
        dict[best[0]] = dict[best[0]].next;
        if(!dict[best[0]]) delete dict[best[0]];
    }

    return head;
};
