class Main {

    startGame(){
        
        renderer.renderBoard(logic.matrix)
    }

    movePlayer(playerNum, direction){


    }



}


const renderer = new Renderer()
const logic = new Logic(6,8)
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
    }
    // Invoking s key
    if (e.which == 115) {
        logic.movePlayer(1, "down")
        renderer.renderBoard(logic.matrix)
    }
    // Invoking a key
    if (e.which == 97) {
        logic.movePlayer(1, "left")
        renderer.renderBoard(logic.matrix)
    }
    // Invoking d key
    if (e.which == 100) {
          logic.movePlayer(1, "right")
          renderer.renderBoard(logic.matrix)
    }
})

// Player 2 keyboard keys
$(document).keypress(function (e) {
    
    // Invoking i key
    if (e.which == 105) {
        logic.movePlayer(2, "up")
        renderer.renderBoard(logic.matrix)
    }
    // Invoking k key
    if (e.which == 107) {
        logic.movePlayer(2, "down")
        renderer.renderBoard(logic.matrix)
    }
    // Invoking j key
    if (e.which == 106) {
        logic.movePlayer(2, "left")
        renderer.renderBoard(logic.matrix)
    }
    // Invoking l key
    if (e.which == 108) {
          logic.movePlayer(2, "right")
          renderer.renderBoard(logic.matrix)
    }
})
