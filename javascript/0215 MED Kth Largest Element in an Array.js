/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new MaxHeap();
    for(const num of nums){
        heap.insert(num);
    }
    for(let i=0;i<k-1;i++){
        heap.extractMax();
    }

    return heap.heap[0];

    // return nums.sort((a,b)=>b-a)[k-1];
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
        let index = this.heap.length-1;
        while(index>0){
            let element = this.heap[index];
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.heap[parentIndex];
            if(element<parent) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
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
        let left = 2*index+1;
        let right = 2*index+2;
        let largest = index;
        let length = this.heap.length;
        if(left<length && this.heap[left]>this.heap[largest]){
            largest = left;
        }
        if(right<length && this.heap[right]>this.heap[largest]){
            largest = right;
        }
        if(largest!==index){
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]];
            this.sinkDown(largest);
        }
    }

}
