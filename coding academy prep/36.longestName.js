// 36.+UnitTesting Write a function that gets a string of names delimited by a comma. I.e:
// 'igal,moshe,haim' and prints the longest name, and the shortest name. Tip: use the
// function indexOf, note that the function accepts 2 parameters

let str = 'igal,moshe,haim'

function getLongestName(str, index) {
  toArr = str.split(',')
  longestShortest = []
  longestName = ''
  shortestName = ''
  for (let i = 0; i < toArr.length; i++) {
    if (toArr[i] <= longestName) {
      shortestName = toArr[i]
    } else longestName = toArr[i]
  }

  longestShortest.push(longestName)
  longestShortest.push(shortestName)
  return `longest name is: ${
    longestShortest.indexOf('moshe') + 1
  } in the arr. shortest name is: ${
    longestShortest.indexOf('haim') + 1
  } in the arr`
}

console.log(getLongestName(str))
