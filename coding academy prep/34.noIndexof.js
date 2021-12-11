// 34.+UnitTesting write a function named myIndexOf(str, searchStr) that accepts 2 strings.
// The function returns the index of the second string in the first, if it wasn’t found, return
// -1 (don’t use the built-in indexOf...)

let str = 'hallo'
let searchStr = 'hallollloooowwww'

function myIndexOf(str, searchStr) {
  for (let i = 0; i < searchStr.length; i++) {
    if (!str[i]) {
      console.log(-1)
    } else console.log(str[i])
  }
}

myIndexOf(str, searchStr)
