function getCountCol(colIdx, symbol) {
  var count = 0
  for (var i = 0; i < gBoard.length; i++) {
    var currCell = gBoard[i][colIdx]
    if (currCell === symbol) count++
  }
  return count
}

function getCountRow(row, symbol) {
  var count = 0
  for (var i = 0; i < row.length; i++) {
    if (row[i] === symbol) count++
  }
  return count
}
