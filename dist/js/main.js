let logic
const renderer = new Renderer()

class Main {
    
    async startGame(){
       renderer.displayBoardSizeMenu()
       renderer.blurBackground()

        // Enter Dimensions Button
        $(".enterSizeButton").on("click", function(){
            let x =  $(this).closest(".boardSize").find(".xInput").val()          
            let y =  $(this).closest(".boardSize").find(".yInput").val()        
            if (x && y){
                renderer.unBlurBackground()
                renderer.hideBoardSizeMenu()
                // let countDown = setInterval(() => {renderer.renderCountdown}, 1000)
                logic = new Logic(x,y)
                renderer.renderBoard(logic.matrix)
                renderer.renderScores(logic.player1.score, logic.player2.score)
            }

        })
    }

    movePlayer(playerNum, direction){

        
    }

    

}

const main = new Main()
//==================================================




// Start button
$(".startButton").on("click", function(){
    main.startGame()
})

// Player 1 keyboard keys
$(document).keypress(function (e) {
    
    // Invoking w key
    if (e.which == 119) {
        logic.movePlayer(1, "up")
        renderer.renderBoard(logic.matrix)
        renderer.renderScores(logic.player1.score, logic.player2.score)
    }
    // Invoking s key
    if (e.which == 115) {
        logic.movePlayer(1, "down")
        renderer.renderBoard(logic.matrix)
        renderer.renderScores(logic.player1.score, logic.player2.score)
    }
    // Invoking a key
    if (e.which == 97) {
        logic.movePlayer(1, "left")
        renderer.renderBoard(logic.matrix)
        renderer.renderScores(logic.player1.score, logic.player2.score)
    }
    // Invoking d key
    if (e.which == 100) {
        logic.movePlayer(1, "right")
        renderer.renderBoard(logic.matrix)
        renderer.renderScores(logic.player1.score, logic.player2.score)
    }
})

// Player 2 keyboard keys
$(document).keypress(function (e) {
    
    // Invoking i key
    if (e.which == 105) {
        logic.movePlayer(2, "up")
        renderer.renderBoard(logic.matrix)
        renderer.renderScores(logic.player1.score, logic.player2.score)
    }
    // Invoking k key
    if (e.which == 107) {
        logic.movePlayer(2, "down")
        renderer.renderBoard(logic.matrix)
        renderer.renderScores(logic.player1.score, logic.player2.score)
    }
    // Invoking j key
    if (e.which == 106) {
        logic.movePlayer(2, "left")
        renderer.renderBoard(logic.matrix)
        renderer.renderScores(logic.player1.score, logic.player2.score)
    }
    // Invoking l key
    if (e.which == 108) {
        logic.movePlayer(2, "right")
        renderer.renderBoard(logic.matrix)
        renderer.renderScores(logic.player1.score, logic.player2.score)
    }
})
