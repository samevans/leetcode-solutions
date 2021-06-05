/**
 * Initialize your data structure here.
 */
class ListNode{
    constructor(val, next=null){
        this.val = val
        this.next = next
    }
}

class MyLinkedList {
    constructor() {
        this.head = null
    }
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let curr = this.head
    let currIndex = 0;
    while(curr){
        if(currIndex === index){
            return curr.val
        }
        curr = curr.next
        currIndex++
    }
    return -1
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.head = new ListNode(val, this.head)
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let curr = this.head
    if (!curr) {
        this.head = new ListNode(val)
    } else {
        while(curr.next){
            curr = curr.next
        }
        curr.next = new ListNode(val)
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index===0){
        this.head = new ListNode(val, this.head)
        return
    }
    
    let curr = this.head
    let currIndex = 0
    let prev
    while(curr){
        if(currIndex === index) {
            prev.next = new ListNode(val, curr)
            return
        }
        prev=curr
        curr=curr.next
        currIndex++
    }
    if(currIndex === index) {
        prev.next = new ListNode(val)
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index===0){
        if(this.head){
            this.head = this.head.next
        }
        return
    }
    
    let curr = this.head
    let currIndex = 0
    let prev
    while(curr) {
        if(currIndex === index) {
            prev.next = curr.next
            return
        }
        prev=curr
        curr=curr.next
        currIndex++
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */