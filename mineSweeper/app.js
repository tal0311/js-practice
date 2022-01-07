import board from './logic.js'

displayBoard(board)
function displayBoard(board) {
  for (let i = 0; i < 5; i++) {
    let cell = board[i][i]
    let cellDiv = document.createElement('div')
    cellDiv.innerHTML = `<div id=${cell.id} class='${
      cell.isMine ? 'mine' : 'empty'
    }'></div>`
    console.log(cellDiv)
  }
}
