class Renderer {

    constructor(){
        this.counterCountdown = 3
    }

    renderBoard(matrix) {
        $('.board-container').empty()

        let board = ""
        let width = (100 - 0.10 * (matrix[0].length)) / matrix[0].length

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                board += this.renderTile(matrix[y][x], width)
            }
        }
        $('.board-container').append(board)
    }

    renderTile(string, width) {

        switch (string) {

            case ".":
                return `<div class="tile" style="width:${width}vw;"></div>`
                break
            case 1:
                return `<div class="tile player1" style="width:${width}vw;"></div>`
                break
            case 2:
                return `<div class="tile player2" style="width:${width}vw;"></div>`
                break
            case "f":
                return `<div class="tile food" style="width:${width}vw;"></div>`
                break
            default:
                console.log("Not Valid")
        }
    }

    displayBoardSizeMenu(){
        $(".boardSize").css("display", "block")
    }

    blurBackground(){
        $("#container").css("filter", "blur(3px)")
    }

    hideBoardSizeMenu(){
        $(".boardSize").css("display", "none")
    }

    unBlurBackground(){
        $("#container").css("filter", "")
    }

    // renderCountdown(){
    //     $('.board-container').empty()
    //     $('.board-container').append(`<div>${this.counterCountdown}</div>`)
    //     console.log(this)
    //     this.counterCountdown--
    //     if (this.counterCountdown===0) clearInterval(countDown)
    // }

    renderBoardSize(){

    }

    renderScores(player1Score, player2Score) {
        $('.player1Score').empty()
        $('.player2Score').empty()
        $('.player1Score').append(`<div>Baxter: <b>${player1Score}</b> plates</div>`)
        $('.player2Score').append(`<div>Skipper: <b>${player2Score}</b> plates</div>`)
    }
}