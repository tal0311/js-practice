import board from './logic.js'
import get from './getElement.js'

let boardElement = get('#board')
function displayBoard(board) {
  for (let i = 0; i < 5; i++) {
    let cell = board[i][i]

    let cellDiv = document.createElement('div')
    cellDiv.innerHTML = `<div id=${cell.id} class='cell ${
      cell.isMine ? 'mine' : 'empty'
    }'></div>`
    cellDiv.addEventListener('click', (e) => checkCell(e))
    boardElement.append(cellDiv)
  }
}

function checkCell(e) {
  const cell = e.target
  if (cell.classList.contains('mine')) {
    cell.textContent = 'X'
  } else {
    cell.textContent = '⭕'
  }
}

window.addEventListener('DOMContentLoaded', displayBoard(board, boardElement))
