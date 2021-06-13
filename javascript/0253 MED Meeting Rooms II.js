/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals = intervals.sort((a,b)=>a[0]-b[0])
    
    let heap = new MinHeap();
    heap.insert(intervals[0])
    for(let i=1; i<intervals.length; i++){
        let meeting = intervals[i]
        if(meeting[0]>=heap.getNextMeetingEnd()){
            heap.extractMin()
        }
        heap.insert(meeting)
    }
    return heap.size()
};

class MinHeap{
    constructor(){
        this.heap = []
    }
    insert(val) {
        this.heap.push(val)
        this.bubbleUp()
    }
    bubbleUp(){
        let index = this.heap.length-1
        while(index>0){
            let elem = this.heap[index]
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.heap[parentIndex]
            if(parent[1]<elem[1]) break;
            this.heap[index] = parent
            this.heap[parentIndex] = elem
            index = parentIndex
        }
    }
    extractMin(){
        let min
        if(this.heap.length){
            min = this.heap[0]
            if(this.heap.length > 1) {
                this.heap[0] = this.heap.pop()
                this.sinkDown(0)
            }else{
                this.heap.pop()
            }
        }
        return min
    }
    sinkDown(index){
        let smallest = index
        let left = 2*index+1
        let right = 2*index+2
        let length = this.heap.length
        if(left<length && this.heap[left][1] < this.heap[smallest][1]){
            smallest=left
        }
        if(right<length && this.heap[right][1] < this.heap[smallest][1]){
            smallest=right
        }
        if(smallest!==index){
            [this.heap[smallest],this.heap[index]] = [this.heap[index],this.heap[smallest]]
            this.sinkDown(smallest)
        }
    }
    size(){
        return this.heap.length
    }
    getNextMeetingEnd(){
        return this.heap[0][1]
    }
}