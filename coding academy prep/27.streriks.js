console.log('ok')

// 27. Asterisks!
// a. Write the function getAsterisks(length) that returns a string containing asterisks
// according to the number supplied.
// For example: when the requested length is 4, it returns '****'
// b. Write a function named: getTriangle(height) that returns a triangle:

// (the parameter value here is 4)
// Hint: use the function getAsterisks in a loop. Also, use ‘\n’ to create a new line.
// c. Write a function named: getMusicEqualizer(rowsCount) that generates random
// numbers between 1 and 10 and return columns in random lengths:

// d. Write a function that returns a block of asterisks (*) by the following parameters:
// rowsCount and colsCount. I.e: for 4, 5
// Now, return only the outline:

// a.

let character = ' ✡' || prompt('choose a character to display in shapes')
document.write('<h1>Get pyramid</h1>')
let length = 5 || prompt('pick a number 1-10')
function getAsterisks(length) {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j <= i; j++) {
      document.write(character)
    }
    document.write('<br>')
  }
  for (let i = 0; i <= length; i++) {
    for (let j = length; j >= i; j--) {
      document.write(character)
    }
    document.write('<br>')
  }
}

getAsterisks(length)

document.write('<br>')
document.write('<h1>Get equalizer</h1>')
let rowCount = 8 || prompt('choose a number 1-5')
function getMusicEqualizer(rowCount) {
  for (let i = 0; i < rowCount; i++) {
    let random = Math.floor(Math.random() * rowCount)
    for (let j = random; j < rowCount; j++) {
      document.write(character)
    }
    document.write('<br>')
  }
}

getMusicEqualizer(rowCount)

document.write('<br>')
document.write('<h1>Get square</h1>')

let rows = 4 || prompt('choose rows number of square')
let cols = 5 || prompt('choose cols number of square')
function getSquare(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      document.write(character)
    }
    document.write('<br>')
  }
}
getSquare(rows, cols)

document.write('<br>')
document.write('<h1>Get square outline</h1>')

function getSquareOutline(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i == 0 || i == rows - 1 || j == 0 || j == cols - 1) {
        document.write(character)
      } else {
        document.write(' &nbsp &nbsp')
      }
    }
    document.write('<br>')
  }
}
getSquareOutline(rows, cols)
