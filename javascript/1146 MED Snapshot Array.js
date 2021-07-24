/**
 * @param {number} length
 */
class SnapshotArray {
    constructor(length){
        this.arr = Array(length).fill(0)
        this.snaps = []
        this.actions = []
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.actions.push([index,val])
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snaps.push(this.actions.length)
    return this.snaps.length - 1
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let arr = [...this.arr]
    for(let i=0; i<this.snaps[snap_id]; i++){
        let [idx,val] = this.actions[i]
        arr[idx] = val
    }
    return arr[index]
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */