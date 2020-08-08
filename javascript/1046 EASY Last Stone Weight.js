/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new MaxHeap();
    for(const stone of stones){
        heap.insert(stone);
    }

    while(heap.heap.length>1){
        let y = heap.extractMax();
        let x = heap.extractMax();

        if(x!==y){
            heap.insert(y-x);
        }
    }

    return heap.heap.length === 1 ? heap.heap[0] : 0;
};

class MaxHeap{
    constructor(){
        this.heap=[];
    }
    insert(elem){
        this.heap.push(elem);
        this.bubbleUp();
    }
    bubbleUp(){
        let index=this.heap.length-1;
        while(index>0){
            let element=this.heap[index];
            let parentIndex=Math.floor((index-1)/2);
            let parent=this.heap[parentIndex];
            if(parent>element) break;
            this.heap[index]=parent;
            this.heap[parentIndex]=element;
            index=parentIndex;
        }
    }
    extractMax(){
        let max = this.heap[0];
        if(this.heap.length>1){
            this.heap[0]=this.heap.pop();
            this.sinkDown(0);
        }else{
            this.heap.pop();
        }
        return max;
    }
    sinkDown(index){
        let left=2*index+1;
        let right=2*index+2;
        let largest=index;
        let length=this.heap.length;
        if(left<=length && this.heap[left]>this.heap[largest]){
            largest=left;
        }
        if(right<=length && this.heap[right]>this.heap[largest]){
            largest=right;
        }
        if(largest!==index){
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
            this.sinkDown(largest);
        }
    }
}
