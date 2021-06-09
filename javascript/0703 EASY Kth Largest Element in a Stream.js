/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
    constructor(k, nums){
        this.heap = new MinHeap(k);
        
        for(let num of nums){
            this.heap.insert(num)
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.insert(val)
    return this.heap.heap[0]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MinHeap{
    constructor(k){
        this.heap = []
        this.k=k
    }
    size(){
        return this.heap.length
    }
    insert(val){
        if(this.size()<this.k){
            this.heap.push(val)
            this.bubbleUp()
        }
        else if(this.heap[0]<val){
            this.extractMin()
            this.heap.push(val)
            this.bubbleUp()
        }
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