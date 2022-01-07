// // 55.Fill up a multi-dimensional array with numbers, and then, Write the following
// // functions:
// // a. sumCol(mat, colIdx)
// // b. sumRow(mat, rowIdx)
// // c. findMax(mat, colIdx)
// // d. findAvg(mat)
// // e. sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd)

// let one = [10, 20, 30]
// let tow = [40, 50, 60]
// let three = [70, 80, 90]

// let mat = [one, tow, three]
// // console.log('mat:', mat)

// // a.
// console.log('a:', '')
// sumCol(mat, 0)
// function sumCol(mat, colIndex) {
//   for (let i = 0; i < mat.length; i++) {
//     const rows = mat[i]
//     for (let j = 0; j < rows.length; j++) {
//       if (rows[j] === rows[colIndex]) {
//         console.log(rows[colIndex])
//       }
//     }
//   }
// }

// // b.
// console.log('b:')
// sumRow(mat, 1)
// function sumRow(mat, rowIdx) {
//   for (let i = 0; i < mat.length; i++) {
//     const row = mat[rowIdx]
//     if (mat[i] === row) {
//       console.log(row)
//     }
//   }
// }

// // c.
// console.log('c:', '')
// console.log('findMax:', findMax(mat, 0))
// function findMax(mat, colIdx) {
//   let colMax = 0
//   for (let i = 0; i < mat.length; i++) {
//     const row = mat[i]

//     for (let j = 0; j < row.length; j++) {
//       if (row[j] === row[colIdx] && row[colIdx] > colIdx) {
//         colMax = row[colIdx]
//       }
//     }
//   }
//   return colMax
// }

// // d.
// console.log('d:', '')
// console.log('findAvg:', findAvg(mat))
// function findAvg(mat) {
//   let sum = 0
//   let divider = []
//   for (let i = 0; i < mat.length; i++) {
//     row = mat[i]
//     for (let j = 0; j < row.length; j++) {
//       const num = row[j]
//       sum += num
//       divider.push(num)
//     }
//   }
//   avg = sum / divider.length
//   return avg
// }

// // e.
// console.log('e.:')
// let rowIdxStart = 0
// let rowIdxEnd = mat[0].length
// console.log('rowIdxEnd:', rowIdxEnd)
// let colIdxStart = 0
// console.log('colIdxStart:', colIdxStart)
// let colIdxEnd = mat[length].length
// console.log('colIdxEnd:', colIdxEnd)

// let areaOfMat = sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd)
// function sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd) {
//   let vertical = colIdxEnd - colIdxStart
//   console.log('vertical:', vertical)
//   let horizontal = rowIdxEnd - rowIdxStart
//   console.log('horizontal:', horizontal)

//   area = vertical * horizontal
//   return area
// }

// // console.log(areaOfMat)
// class cell {
//   constructor(value, content) {
//     this.value = document.createElement('div')
//     this.content = content
//   }
//   click() {
//     this.content.addEventListener('click', console.log('ok'))
//   }
// }

// let mine2 = new cell('mine', `<div>click</div>`)
// console.log('mine2:', mine2)

// const board = document.querySelector('.board')
// board.appendChild((mine2.innerHTML = mine2.content))

// class mine {
//   constructor(value) {
//     this.value = value
//   }
// }
// class empty {
//   constructor(id, value) {
//     ;(this.id = id), (this.value = value)
//   }
// }
// let arr1 = [0, 0, 0]
// let arr2 = [0, 8, 0]
// let arr3 = [0, 0, 0]

// function setMines() {
//   let matrix = [arr1, arr2, arr3]
//   let id = new Date().getTime().toString()
//   for (let i = 0; i < matrix.length; i++) {
//     row = matrix[i]
//     console.log(row)
//     for (let j = 0; j < row.length; j++) {
//       if (row[j] === 0) {
//         console.log((row[j] = new empty(id, 'empty')))
//       } else {
//         console.log((row[j] = new mine('mine')))
//       }
//     }
//   }
//   return matrix
// }

// function createBoard(block) {
//   const board = document.querySelector('.board')
//   for (let i = 0; i < block.length; i++) {
//     row = block[i]
//     console.log(row)
//     for (let i = 0; i < row.length; i++) {
//       cell = document.createElement('div')
//       cell.innerHTML = `<div class='${row[i].value} cell'>click me</div>`

//       board.appendChild(cell)
//     }
//   }
// }
// createBoard(setMines())

let boardSize = 5
let minesNum = 5
let id = 0
let mat3 = []

function crateBoard(mineArr) {
  console.log(mineArr)
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
  mineArr = []
  for (let i = 0; i < 5; i++) {
    let mineNumber = Math.floor(Math.random() * 25)
    mineArr.push(mineNumber)
  }
  return mineArr
}
