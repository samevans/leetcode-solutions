/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new MaxHeap();
    this.k=k;
    for(const num of nums){
        this.heap.insert(num);
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.insert(val);

    const output=[];
    for(let i=0;i<this.k;i++){
        output.push(this.heap.extractMax());
    }

    for(const item of output){
        this.heap.insert(item);
    }

    return output[this.k-1];

};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


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
