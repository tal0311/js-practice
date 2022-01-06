// 55.Fill up a multi-dimensional array with numbers, and then, Write the following
// functions:
// a. sumCol(mat, colIdx)
// b. sumRow(mat, rowIdx)
// c. findMax(mat, colIdx)
// d. findAvg(mat)
// e. sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd)

let one = [10, 20, 30]
let tow = [40, 50, 60]
let three = [70, 80, 90]

let mat = [one, tow, three]
// console.log('mat:', mat)

// a.
console.log('a:', '')
sumCol(mat, 0)
function sumCol(mat, colIndex) {
  for (let i = 0; i < mat.length; i++) {
    const rows = mat[i]
    for (let j = 0; j < rows.length; j++) {
      if (rows[j] === rows[colIndex]) {
        console.log(rows[colIndex])
      }
    }
  }
}

// b.
console.log('b:')
sumRow(mat, 1)
function sumRow(mat, rowIdx) {
  for (let i = 0; i < mat.length; i++) {
    const row = mat[rowIdx]
    if (mat[i] === row) {
      console.log(row)
    }
  }
}

// c.
console.log('c:', '')
console.log('findMax:', findMax(mat, 0))
function findMax(mat, colIdx) {
  let colMax = 0
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i]

    for (let j = 0; j < row.length; j++) {
      if (row[j] === row[colIdx] && row[colIdx] > colIdx) {
        colMax = row[colIdx]
      }
    }
  }
  return colMax
}

// d.
console.log('d:', '')
console.log('findAvg:', findAvg(mat))
function findAvg(mat) {
  let sum = 0
  let divider = []
  for (let i = 0; i < mat.length; i++) {
    row = mat[i]
    for (let j = 0; j < row.length; j++) {
      const num = row[j]
      sum += num
      divider.push(num)
    }
  }
  avg = sum / divider.length
  return avg
}
