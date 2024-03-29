/**
 * Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
class SnakeGame {
    constructor(width, height, food){
        this.width = width
        this.height = height
        this.food = food
        this.snake = [[0,0]]
        this.score = 0
        this.addSnake = []
    }
    isValid(){
        let set = new Set()
        let result = true
        for(let snake of this.snake){
            result &= snake[0] >= 0
            result &= snake[1] >= 0
            result &= snake[1] < this.width
            result &= snake[0] < this.height
            result &= !set.has(snake)
            set.add(snake)
        }
            
        console.log(this.snake, result)
        return result
    }
};

/**
 * Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body. 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
    for(let snake of this.snake){
        switch(direction){
            case 'U':
                snake[0]--
                break;
            case 'L':
                snake[1]--
                break;
            case 'R':
                snake[1]++
                break;
            case 'D':
                snake[0]++
                break;
            default:
                break;
        }
    }
    
    if(!this.isValid()){
        return -1
    }
    if(this.addSnake.length){
        for(let food of this.addSnake){
            for(let snake of this.snake){
                
            }
        }
        
    }
    if(this.food.length 
       && this.snake[0][0] === this.food[0][0] 
       && this.snake[0][1] === this.food[0][1]) {
        this.score++
        this.addSnake.push(this.food.shift())
    } 
    
    return this.score
};


/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */