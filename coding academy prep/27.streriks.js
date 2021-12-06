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

let height = 5
let length = 5
function getAsterisks() {
  for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= length; j++) {
      document.write(' *')
    }
    document.write('<br>')
  }
}

getAsterisks()

document.write('-----', '<br>')
