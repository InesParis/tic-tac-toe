const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = ["", "", "", "", "", "", "", "", ""];

infoDisplay.textContent = "Circle goes first";

function createBoard() {
  startCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    gameBoard.append(cellElement);
  });
}
createBoard();
