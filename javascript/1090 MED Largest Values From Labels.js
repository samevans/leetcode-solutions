/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {

    let heap = new MaxHeap();

    for(let i=0;i<values.length;i++){
        heap.insert(new Item(values[i],labels[i]))
    }

    let value = 0;
    const timesUsed = {};
    while(num_wanted>0){
        let max = heap.extractMax();
        if(!max) break;

        if(!timesUsed[max.label]) timesUsed[max.label]=0;
        if(timesUsed[max.label]<use_limit){
            value+=max.value;
            timesUsed[max.label]++;
            num_wanted--;
        }
    }

    return value;

};

class Item{
    constructor(value, label){
        this.value = value;
        this.label = label;
    }
}

class MaxHeap{
    constructor(){
        this.heap=[];
    }
    insert(item){
        this.heap.push(item);
        this.bubbleDown();
    }
    bubbleDown(){
        let index = this.heap.length-1;
        while(index>0){
            let element = this.heap[index];
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.heap[parentIndex];
            if(parent.value>element.value) break;
            this.heap[index]=parent;
            this.heap[parentIndex]=element;
            index=parentIndex;
        }
    }
    extractMax(){
        let max;
        if(this.heap.length>0){
            max = this.heap[0];
            if(this.heap.length>1){
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
        let length = this.heap.length;
        if(left<length && this.heap[left].value > this.heap[largest].value){
            largest = left;
        }
        if(right<length && this.heap[right].value > this.heap[largest].value){
            largest = right;
        }
        if(largest!==index){
            [this.heap[largest],this.heap[index]]=[this.heap[index],this.heap[largest]];
            this.sinkDown(largest);
        }
    }
}
