/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const heap=new MinHeap();
    if(!!root){
        const queue=[root];
        while(queue.length){
            let curr=queue.shift();
            heap.insert(curr.val);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    }

    for(let i=0;i<k-1;i++){
        heap.extractMin();
    }
    return heap.heap[0];
};

class MinHeap{
    constructor(){
        this.heap=[];
    }
    insert(val){
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp(){
        let index=this.heap.length-1;
        while(index>0){
            let element = this.heap[index];
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.heap[parentIndex];
            if(parent<element) break;
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index=parentIndex;
        }
    }
    extractMin(){
        if(this.heap.length>0){
            let min=this.heap[0];
            if(this.heap.length>1){
                this.heap[0]=this.heap.pop();
                this.sinkDown(0);
            }else{
                this.heap.pop();
            }
            return min;
        }
    }
    sinkDown(index){
        let left=2*index+1;
        let right=2*index+2;
        let smallest=index;
        let length=this.heap.length;
        if(right<length && this.heap[right]<this.heap[smallest]){
            smallest=right
        }
        if(left<length && this.heap[left]<this.heap[smallest]){
            smallest=left
        }
        if(smallest!==index){
            [this.heap[smallest],this.heap[index]] = [this.heap[index],this.heap[smallest]];
            this.sinkDown(smallest);
        }
    }
}
