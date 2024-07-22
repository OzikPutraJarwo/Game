const PLAYER_X = 'X';
const PLAYER_O = 'O';

// const WIN_COMBINATIONS_3X3 = [
//   [0, 1, 2], [3, 4, 5], [6, 7, 8],
//   [0, 3, 6], [1, 4, 7], [2, 5, 8],
//   [0, 4, 8], [2, 4, 6]
// ];

// const WIN_COMBINATIONS_4X4 = [
//   [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
//   [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
//   [0, 5, 10, 15], [3, 6, 9, 12]
// ];

// const WIN_COMBINATIONS_5X5 = [
//   [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]
// ];

// const WIN_COMBINATIONS_6X6 = [
//   [0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29], [30, 31, 32, 33, 34, 35],
//   [0, 6, 12, 18, 24, 30], [1, 7, 13, 19, 25, 31], [2, 8, 14, 20, 26, 32], [3, 9, 15, 21, 27, 33], [4, 10, 16, 22, 28, 34], [5, 11, 17, 23, 29, 35],
//   [0, 7, 14, 21, 28, 35], [5, 10, 15, 20, 25, 30]
// ];

const WIN_COMBINATIONS_3X3 = [
  // Horizontal
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  // Vertikal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  // Diagonal
  [0, 4, 8], [2, 4, 6]             
];


const WIN_COMBINATIONS_4X4 = [
  // Horizontal
  [0, 1, 2], [1, 2, 3],
  [4, 5, 6], [5, 6, 7],
  [8, 9, 10], [9, 10, 11],
  [12, 13, 14], [13, 14, 15],
  // Vertikal
  [0, 4, 8], [4, 8, 12],
  [1, 5, 9], [5, 9, 13],
  [2, 6, 10], [6, 10, 14],
  [3, 7, 11], [7, 11, 15],
  // Diagonal
  [0, 5, 10], [1, 6, 11], [4, 9, 14], [5, 10, 15],
  [3, 6, 9], [2, 5, 8], [7, 10, 13], [6, 9, 12]
];


const WIN_COMBINATIONS_5X5 = [
  // Horizontal
  [0, 1, 2, 3], [1, 2, 3, 4],
  [5, 6, 7, 8], [6, 7, 8, 9],
  [10, 11, 12, 13], [11, 12, 13, 14],
  [15, 16, 17, 18], [16, 17, 18, 19],
  [20, 21, 22, 23], [21, 22, 23, 24],
  // Vertikal
  [0, 5, 10, 15], [5, 10, 15, 20],
  [1, 6, 11, 16], [6, 11, 16, 21],
  [2, 7, 12, 17], [7, 12, 17, 22],
  [3, 8, 13, 18], [8, 13, 18, 23],
  [4, 9, 14, 19], [9, 14, 19, 24],
  // Diagonal
  [0, 6, 12, 18], [1, 7, 13, 19], [5, 11, 17, 23], [6, 12, 18, 24],
  [3, 7, 11, 15], [4, 8, 12, 16], [8, 12, 16, 20], [9, 13, 17, 21]
];

const WIN_COMBINATIONS_6X6 = [
  // Horizontal
  [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5],
  [6, 7, 8, 9], [7, 8, 9, 10], [8, 9, 10, 11],
  [12, 13, 14, 15], [13, 14, 15, 16], [14, 15, 16, 17],
  [18, 19, 20, 21], [19, 20, 21, 22], [20, 21, 22, 23],
  [24, 25, 26, 27], [25, 26, 27, 28], [26, 27, 28, 29],
  [30, 31, 32, 33], [31, 32, 33, 34], [32, 33, 34, 35],
  // Vertikal
  [0, 6, 12, 18], [6, 12, 18, 24], [12, 18, 24, 30],
  [1, 7, 13, 19], [7, 13, 19, 25], [13, 19, 25, 31],
  [2, 8, 14, 20], [8, 14, 20, 26], [14, 20, 26, 32],
  [3, 9, 15, 21], [9, 15, 21, 27], [15, 21, 27, 33],
  [4, 10, 16, 22], [10, 16, 22, 28], [16, 22, 28, 34],
  [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35],
  // Diagonal
  [0, 7, 14, 21], [1, 8, 15, 22], [2, 9, 16, 23],
  [6, 13, 20, 27], [7, 14, 21, 28], [8, 15, 22, 29],
  [12, 19, 26, 33], [13, 20, 27, 34], [14, 21, 28, 35],
  [3, 8, 13, 18], [4, 9, 14, 19], [5, 10, 15, 20],
  [9, 14, 19, 24], [10, 15, 20, 25], [11, 16, 21, 26],
  [15, 20, 25, 30], [16, 21, 26, 31], [17, 22, 27, 32]
];

const ty = document.getElementById('gametype');
const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".board");
const modalFinish = document.querySelector(".popup");
const modalContainer = document.querySelector(".popup-container");
const overlay = document.querySelector(".overlay");
const messageElement = document.getElementById('msg');
const restartButtons = document.querySelectorAll('#restart');
const resetButton = document.getElementById('reset');
const switchButton = document.getElementById('switch');
const themeButton = document.getElementById('theme');
const themeOptions = document.getElementById('selecttheme');
const modeSelectButton = document.getElementById('mode');
const modeSelect = document.getElementById('modeSelect');
const modeSelectOptions = document.getElementById('selectmode');
const finishOptions = document.getElementById('finish');
const turnIndicator = document.getElementById('turn');
const playerButton = document.querySelector(".choose.plyr");
const computerButton = document.querySelector(".choose.comp");
const scoreboard = document.getElementById('scoreboard');
const scoreX = document.querySelector("#scoreboard .scoreX span");
const scoreO = document.querySelector("#scoreboard .scoreO span");
const dofourButton = document.getElementById('dofour');
const dothreeButton = document.getElementById('dothree');
const dofiveButton = document.getElementById('dofive');
const dosixButton = document.getElementById('dosix');
const fullscreenButton = document.querySelector('.fullscreen');

let player = PLAYER_X;
let computer = PLAYER_O;
let currentPlayer = player;
let gameActive = true;
let vsComputer = true;
let gridSize = 3;

// Initialize scores
let scores = {
  X: 0,
  O: 0
};

const checkWin = () => {
  const winCombinations = gridSize === 3 ? WIN_COMBINATIONS_3X3 :
                         gridSize === 4 ? WIN_COMBINATIONS_4X4 :
                         gridSize === 5 ? WIN_COMBINATIONS_5X5 :
                         WIN_COMBINATIONS_6X6;
  return winCombinations.some(combination =>
    combination.every(index => cells[index].classList.contains(currentPlayer))
  );
};

const checkDraw = () =>
  Array.from(cells).filter(cell => cell.style.display !== 'none').every(cell => cell.hasAttribute("marked"));

const canWin = nextPlayer => {
  const winCombinations = gridSize === 3 ? WIN_COMBINATIONS_3X3 :
                         gridSize === 4 ? WIN_COMBINATIONS_4X4 :
                         gridSize === 5 ? WIN_COMBINATIONS_5X5 :
                         WIN_COMBINATIONS_6X6;
  return winCombinations.find(combination =>
    combination.filter(index => cells[index].classList.contains(nextPlayer)).length === (gridSize - 1) &&
    combination.some(index => !cells[index].hasAttribute("marked"))
  );
};

const getWinningCell = combination =>
  combination.find(index => !cells[index].hasAttribute("marked"));

const handleClick = event => {
  if (!gameActive) return;
  const cell = event.target;
  if (!cell.hasAttribute("marked")) {
    cell.classList.add(currentPlayer);
    cell.setAttribute("marked", "");
    if (checkWin()) {
      messageElement.textContent = `${currentPlayer} Win!`;
      updateScore(currentPlayer);
      showModal();
      gameActive = false;
      return;
    }
    if (checkDraw()) {
      messageElement.textContent = "Draw!";
      showModal();
      gameActive = false;
      return;
    }
    currentPlayer = currentPlayer === player ? computer : player;
    updateTurnIndicator();
    if (vsComputer && currentPlayer === computer) markSmartCell();
  }
};

const markSmartCell = () => {
  let winCombination = canWin(computer);
  if (winCombination) {
    const winningCell = getWinningCell(winCombination);
    markCell(winningCell, computer);
  } else {
    winCombination = canWin(player);
    if (winCombination) {
      const blockingCell = getWinningCell(winCombination);
      markCell(blockingCell, computer);
    } else {
      markRandomUnmarkedCell();
    }
  }
  if (checkDraw()) {
    messageElement.textContent = "Draw!";
    showModal();
    gameActive = false;
    return;
  }
  currentPlayer = player;
};

const markCell = (index, mark) => {
  cells[index].classList.add(mark);
  cells[index].setAttribute("marked", "");
  if (checkWin()) {
    messageElement.textContent = `${mark} Win!`;
    updateScore(mark);
    showModal();
    gameActive = false;
    return;
  }
};

const markRandomUnmarkedCell = () => {
  const unmarkedCells = Array.from(cells).filter(cell => !cell.hasAttribute("marked") && cell.style.display !== 'none');
  if (unmarkedCells.length === 0) return;
  const randomCell = unmarkedCells[Math.floor(Math.random() * unmarkedCells.length)];
  markCell(Array.from(cells).indexOf(randomCell), computer);
};

const showModal = () => {
  modalFinish.classList.add('show');
  modalContainer.classList.add('show');
  overlay.classList.add('show');
  finishOptions.classList.add('show');
};

const hideModal = () => {
  modalFinish.classList.remove('show');
  modalContainer.classList.remove('show');
  overlay.classList.remove('show');
  finishOptions.classList.remove('show');
  modeSelectOptions.classList.remove('show');
  themeOptions.classList.remove('show');
};

const restartGame = () => {
  messageElement.textContent = "";
  cells.forEach(cell => {
    cell.className = "cell";
    cell.removeAttribute("marked");
  });
  currentPlayer = player;
  gameActive = true;
  updateTurnIndicator();
  if (player === PLAYER_O && vsComputer) markSmartCell();
  hideModal();
};

const switchPlayer = () => {
  [player, computer] = [computer, player];
  restartGame();
};

const updateTurnIndicator = () => {
  turnIndicator.className = "";
  turnIndicator.classList.add(currentPlayer, "btn");
  turnIndicator.setAttribute('data-show', !vsComputer);
};

const selectTheme = () => {
  overlay.classList.add('show');
  modalFinish.classList.add('show');
  modalContainer.classList.add('show');
  themeOptions.classList.add('show');
}

const selectThemeWoody = () => {
  document.body.setAttribute("data-theme","woody");
  hideModal();
}

const selectThemeCandy = () => {
  document.body.setAttribute("data-theme","candy");
  hideModal();
}

const selectMode = () => {
  overlay.classList.add('show');
  modalFinish.classList.add('show');
  modalContainer.classList.add('show');
  modeSelectOptions.classList.add('show');
};

const selectVsPlayer = () => {
  vsComputer = false;
  modeSelect.value = 'vsPlayer';
  turnIndicator.setAttribute('data-show', true);
  // switchButton.setAttribute('data-show', false);
  resetScores();
  restartGame();
  hideModal();
  ty.textContent = 'Player vs Player';
};

const selectVsComputer = () => {
  vsComputer = true;
  modeSelect.value = 'vsComputer';
  turnIndicator.setAttribute('data-show', false);
  // switchButton.setAttribute('data-show', true);
  resetScores();
  restartGame();
  hideModal();
  ty.textContent = 'Player vs Computer';
};

const updateScoreboard = () => {
  scoreX.textContent = scores.X;
  scoreO.textContent = scores.O;
};

const updateScore = winner => {
  scores[winner]++;
  localStorage.setItem('ticTacToeScores', JSON.stringify(scores));
  updateScoreboard();
};

const loadScores = () => {
  const storedScores = localStorage.getItem('ticTacToeScores');
  if (storedScores) {
    scores = JSON.parse(storedScores);
  }
  updateScoreboard();
};

const resetScores = () => {
  scores = { X: 0, O: 0 };
  localStorage.setItem('ticTacToeScores', JSON.stringify(scores));
  updateScoreboard();
  restartGame();
};

const switchTo3x3 = () => {
  gridSize = 3;
  cells.forEach((cell, index) => {
    cell.style.display = index < 9 ? 'block' : 'none';
  });
  board.setAttribute("data-cell","3");
  document.body.setAttribute("class","three");
  restartGame();
  dothreeButton.setAttribute("pressed","");
  [dofourButton, dofiveButton, dosixButton].forEach(button => button.removeAttribute("pressed", ""));
};

const switchTo4x4 = () => {
  gridSize = 4;
  cells.forEach((cell, index) => {
    cell.style.display = index < 16 ? 'block' : 'none';
  });
  board.setAttribute("data-cell","4");
  document.body.setAttribute("class","four");
  restartGame();
  dofourButton.setAttribute("pressed","");
  [dothreeButton, dofiveButton, dosixButton].forEach(button => button.removeAttribute("pressed", ""));
};

const switchTo5x5 = () => {
  gridSize = 5;
  cells.forEach((cell, index) => {
    cell.style.display = index < 25 ? 'block' : 'none';
  });
  board.setAttribute("data-cell","5");
  document.body.setAttribute("class","five");
  restartGame();
  dofiveButton.setAttribute("pressed","");
  [dothreeButton, dofourButton, dosixButton].forEach(button => button.removeAttribute("pressed", ""));
};

const switchTo6x6 = () => {
  gridSize = 6;
  cells.forEach((cell, index) => {
    cell.style.display = index < 36 ? 'block' : 'none';
  });
  board.setAttribute("data-cell","6");
  document.body.setAttribute("class","six");
  restartGame();
  dosixButton.setAttribute("pressed","");
  [dothreeButton, dofourButton, dofiveButton].forEach(button => button.removeAttribute("pressed", ""));
};

const fullscreen = () => {
  fullscreenButton.classList.toggle('active');
  const elem = document.documentElement;
  if (!document.fullscreenElement) {
      elem.requestFullscreen();
  } else {
      document.exitFullscreen();
  }
};

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
      fullscreenButton.classList.remove('active');
  }
});

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButtons.forEach(button => button.addEventListener('click', restartGame));
resetButton.addEventListener('click', resetScores);
// switchButton.addEventListener('click', switchPlayer);
themeButton.addEventListener('click', selectTheme);
modeSelectButton.addEventListener('click', selectMode);
computerButton.addEventListener('click', selectVsComputer);
playerButton.addEventListener('click', selectVsPlayer);
dothreeButton.addEventListener('click', switchTo3x3);
dofourButton.addEventListener('click', switchTo4x4);
dofiveButton.addEventListener('click', switchTo5x5);
dosixButton.addEventListener('click', switchTo6x6);
fullscreenButton.addEventListener('click', fullscreen);

updateTurnIndicator();
loadScores();