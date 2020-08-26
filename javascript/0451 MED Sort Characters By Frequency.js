/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let max = 0;

    let count = {}
    for(const c of s){
        if(!count[c]) count[c]=0;
        count[c]++;
    }

    let heap = new MaxHeap();
    for(const key of Object.keys(count)){
        heap.insert(new HeapObject(key, count[key]));
    }

    let output="";
    while(heap.size()){
        const obj = heap.extractMax();
        let i = obj.count;
        while(i>0){
            output+=obj.character;
            i--;
        }
    }
    return output;

};

class HeapObject{
    constructor(character,count){
        this.character = character;
        this.count = count;
    }
}

class MaxHeap{
    constructor(){
        this.heap=[];
    }
    size(){
        return this.heap.length;
    }
    values(){
        return this.heap;
    }
    insert(obj){
        this.heap.push(obj);
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.heap.length-1;
        while(index>0){
            let element = this.heap[index];
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.heap[parentIndex];

            if(parent.count>element.count) break;

            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index=parentIndex;
        }
    }
    extractMax(){
        let max;
        if(this.size()){
            max = this.heap[0];
            if(this.size()>1){
                this.heap[0] = this.heap.pop();
                this.sinkDown(0);
            }else{
                this.heap.pop();
            }
        }
        return max;
    }
    sinkDown(index){
        let left = 2*index+1;
        let right = 2*index+2;
        let largest = index;
        let length = this.size();
        if(left<length && this.heap[left].count > this.heap[largest].count){
            largest = left;
        }
        if(right<length && this.heap[right].count > this.heap[largest].count){
            largest = right;
        }
        if(largest!==index){
            [this.heap[index],this.heap[largest]] = [this.heap[largest],this.heap[index]];
            this.sinkDown(largest);
        }
    }
}
