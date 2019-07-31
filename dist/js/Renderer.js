class Renderer {

    renderBoard(matrix) {
        $('.board-container').empty()

        let board = ""
        let width = (100 - 0.05 * (matrix[0].length + 10)) / matrix[0].length

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

    renderBoardSize(){
        
    }

    renderScores() {


    }
}