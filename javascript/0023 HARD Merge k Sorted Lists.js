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
    let minHeap = new MinHeap()
    for(list of lists){
        let curr = list
        while(curr){
            minHeap.insert(curr.val)
            curr = curr.next
        }
    }
    
    let dummy = new ListNode(undefined, undefined)
    let curr = dummy
    while(minHeap.size()){
        curr.next = new ListNode(minHeap.extractMin(), undefined)
        curr = curr.next
    }
    return dummy.next
};

class MinHeap{
    constructor(){
        this.heap = []
    }
    size(){
        return this.heap.length
    }
    insert(val){
        this.heap.push(val)
        this.bubbleUp()
    }
    bubbleUp(){
        let index = this.heap.length-1
        while(index>0){
            let elem = this.heap[index]
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.heap[parentIndex]
            if(parent<elem) break
            this.heap[index] = parent
            this.heap[parentIndex] = elem
            index = parentIndex
        }
    }
    extractMin(){
        let min
        if(this.heap.length){
            min = this.heap[0]
            if(this.heap.length>1){
                this.heap[0] = this.heap.pop()
                this.sinkDown(0)
            }else{
                this.heap.pop()
            }
        }
        return min
    }
    sinkDown(i){
        let smallest=i
        let left = 2*i+1
        let right = 2*i+2
        let length = this.heap.length
        if(left<length && this.heap[left] < this.heap[smallest]){
            smallest = left
        }
        if(right<length && this.heap[right] < this.heap[smallest]){
            smallest = right
        }
        if(smallest!==i){
            [this.heap[i],this.heap[smallest]]=[this.heap[smallest],this.heap[i]]
            this.sinkDown(smallest)
        }
    }
    
}