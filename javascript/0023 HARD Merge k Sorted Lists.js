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
    const heap = new MinHeap();
    for(const head of lists){
        let curr = head;
        while(!!curr){
            heap.insert(curr.val);
            curr = curr.next;
        }
    }
    const head = new ListNode(null,null);
    let curr = head;
    while(heap.heap.length){
        curr.next = new ListNode(heap.extractMin(),null)
        curr=curr.next;
    }
    return !!head.next ? head.next : null;
};

class MinHeap{
    constructor(){
        this.heap=[];
    }

    insert(elem){
        this.heap.push(elem);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.heap.length-1;
        while(index>0){
            let element = this.heap[index];
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.heap[parentIndex];
            if(parent<element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index=parentIndex;
        }
    }

    extractMin(){
        let min = this.heap[0];
        if(this.heap.length>1){
            this.heap[0] = this.heap.pop();
            this.sinkDown(0);
        }else{
            this.heap.pop();
        }
        return min;
    }

    sinkDown(index){
        let left = 2*index+1;
        let right = 2*index+2;
        let largest = index;
        let length = this.heap.length;

        if(right<=length && this.heap[right]<this.heap[largest]){
            largest=right;
        }
        if(left<=length && this.heap[left]<this.heap[largest]){
            largest=left;
        }
        if(largest!==index){
            [this.heap[largest],this.heap[index]]=[this.heap[index],this.heap[largest]];
            this.sinkDown(largest);
        }
    }
}
