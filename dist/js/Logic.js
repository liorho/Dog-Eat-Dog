class Logic extends Matrix{

    constructor(x,y){
        super(x,y)
        this.x=x-1
        this.y=y-1
        this.density = 2
        this.player1  = {score: 0}
        this.player2  = {score: 0}
        this.generatePlayersStartPositin(x,y)
        this.generateFood()
    }

    generatePlayersStartPositin(x,y){
        this.matrix[0][0] = 1
        this.matrix[y-1][x-1] = 2
    }

    placeEmptySpace(position){
        this.matrix[position.y][position.x] = "."
    }

    movePlayer(playerNum, direction){
        let position = this.findCoordinate(playerNum)
        switch (direction){

            case "up":
                if (position.y !== 0 && this.checkObstacles(this.matrix[position.y-1][position.x]) ){
                    this.checkFood(playerNum, position.x, position.y-1)
                    this.matrix[position.y-1][position.x] = playerNum
                    this.placeEmptySpace(position)
                }
                break
            case "down":
                if (position.y !==this.y && this.checkObstacles(this.matrix[position.y+1][position.x])){
                    this.checkFood(playerNum, position.x, position.y+1)
                    this.matrix[position.y+1][position.x] = playerNum
                    this.placeEmptySpace(position)
                }
                break
            case "right":
                if (position.x !==this.x && this.checkObstacles(this.matrix[position.y][position.x+1])){
                    this.checkFood(playerNum, position.x+1, position.y)
                    this.matrix[position.y][position.x+1] = playerNum
                    this.placeEmptySpace(position)
                }
                break
            case "left":
                if (position.x !== 0 && this.checkObstacles(this.matrix[position.y][position.x-1])){
                    this.checkFood(playerNum, position.x-1, position.y)
                    this.matrix[position.y][position.x-1] = playerNum
                    this.placeEmptySpace(position)
                }
                break
            default:
                console.log("Not Valid")
        }
    }

    generateRandomNum(size){
        return Math.floor(Math.random()*size)
    }

    generateFood(){
        let numOfFood = Math.floor(this.x*this.y/this.density)
        let i = 0
        console.log(this.metrix)
        while (i<numOfFood){
            let x = this.generateRandomNum(this.x+1)
            let y = this.generateRandomNum(this.y+1)
            if (this.matrix[y][x] === ".") {
                this.matrix[y][x] = "f"
                i++
            }
        }
    }

    checkFood(playerNum, x, y){
        if (this.matrix[y][x]==="f"){
            playerNum===1 ? this.player1.score++ : this.player2.score++
        }
    }

    checkObstacles(destination){
        return (destination !== 1 && destination !== 2) ? true : false 

    }

    
}