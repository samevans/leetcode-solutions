/**
 * Initialize your data structure here.
 */
class Twitter {
    constructor(){
        this.tweetHistory = {}
        this.followHistory = {}
        this.count = 0
    }
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.tweetHistory[userId]){
        this.tweetHistory[userId] = [];
    }
    this.tweetHistory[userId].push([tweetId, this.count]);
    this.count++;
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let feed = []
    if(this.tweetHistory[userId]){
        feed = feed.concat(this.tweetHistory[userId])
    }
    
    if(this.followHistory[userId]){
        for(followingId of this.followHistory[userId]){
            if(this.tweetHistory[followingId]) {
                feed = feed.concat(this.tweetHistory[followingId])
            }
        }
    }
    
    return feed
        .sort((a,b)=>b[1]-a[1])
        .splice(0,10)
        .map(f=>f[0])
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.followHistory[followerId]){
        this.followHistory[followerId] = new Set()
    }
    this.followHistory[followerId].add(followeeId)
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.followHistory[followerId]) {
        this.followHistory[followerId].delete(followeeId)
    }
};


/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */