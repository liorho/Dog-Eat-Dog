let logic;
const renderer = new Renderer();

startGame = function () {
  renderer.displayBoardSizeMenu();
  renderer.blurBackground();

  // Enter Dimensions Button
  $('.enterSizeButton').on('click', function () {
    let x = $(this).closest('.boardSize').find('.xInput').val();
    let y = $(this).closest('.boardSize').find('.yInput').val();
    if (x && y && x < 21 && y < 21) {
      renderer.unBlurBackground();
      renderer.hideBoardSizeMenu();
      logic = new Logic(x, y);
      renderer.renderBoard(logic.matrix);
      renderer.renderScores(logic.player1.score, logic.player2.score);
    }
  });
};

const renderAfterMove = function () {
  renderer.renderBoard(logic.matrix);
  renderer.renderScores(logic.player1.score, logic.player2.score);
  let data = logic.isGameEnd();
  if (data.endGame) {
    setTimeout(function () {
      renderer.renderEndGame(data);
      document.onkeydown = function (e) {
        location.reload();
      };
    }, 600);
  }
};

//==================================================

// Start button
$('.startButton').on('click', function () {
  startGame();
});

// Player 1 keyboard keys
$(document).keydown(function (e) {
  // Invoking w key
  if (e.which == 87) {
    logic.movePlayer(1, 'up');
    renderAfterMove();
  }
  // Invoking s key
  if (e.which == 83) {
    logic.movePlayer(1, 'down');
    renderAfterMove();
  }
  // Invoking a key
  if (e.which == 65) {
    logic.movePlayer(1, 'left');
    renderAfterMove();
  }
  // Invoking d key
  if (e.which == 68) {
    logic.movePlayer(1, 'right');
    renderAfterMove();
  }
});

// Player 2 keyboard keys
$(document).keydown(function (e) {
  // Invoking up key
  if (e.which == 38) {
    logic.movePlayer(2, 'up');
    renderAfterMove();
  }
  // Invoking down key
  if (e.which == 40) {
    logic.movePlayer(2, 'down');
    renderAfterMove();
  }
  // Invoking left key
  if (e.which == 37) {
    logic.movePlayer(2, 'left');
    renderAfterMove();
  }
  // Invoking right key
  if (e.which == 39) {
    logic.movePlayer(2, 'right');
    renderAfterMove();
  }
});
