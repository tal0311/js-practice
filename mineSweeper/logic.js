let boardSize = 5
let id = 0
let mat3 = []

function crateBoard(mineArr) {
  for (let i = 0; i < boardSize; i++) {
    let row = []
    for (let j = 0; j < boardSize; j++) {
      let cell = j
      cell = {
        id: id++,
        isMine: false,
      }
      if (mineArr.includes(id - 1)) {
        cell.isMine = true
      }
      row.push(cell)
    }
    mat3.push(row)
  }
  return mat3
}
let board = crateBoard(isMine())

function isMine() {
  let mineArr = []
  for (let i = 0; i < 5; i++) {
    let mineNumber = Math.floor(Math.random() * 25)
    mineArr.push(mineNumber)
  }
  return mineArr
}

export default board
