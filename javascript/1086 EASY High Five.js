/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    const scores = {};
    for(const [id, score] of items){
        if(!scores[id]) scores[id] = new MinHeap([]);
        scores[id].insert(score);
        if(scores[id].heap.length>5) scores[id].extractMin()
    }

    const output = []
    for(const key of Object.keys(scores)){
        let avg = Math.floor((scores[key].heap.reduce((a, b) => a + b, 0))/5);
        output.push([key,avg])
    }
    return output;
};

class MinHeap {
    constructor(arr) {
        this.heap = arr;
    }

    insert(element) {
        this.heap.push(element)
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length-1;
        while(index>0){
            let element = this.heap[index]
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.heap[parentIndex];
            if(parent<element) break;
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    extractMin() {
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return min;
    }

    sinkDown(index){
        let left = 2*index + 1;
        let right = 2*index + 2;
        let smallest = index;
        let length = this.heap.length;

        if(right<length && this.heap[smallest]>this.heap[right]){
            smallest = right;
        }
        if(left<length && this.heap[smallest]>this.heap[left]){
            smallest = left;
        }
        if(smallest!==index){
            [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]];
            this.sinkDown(smallest)
        }

    }
}
