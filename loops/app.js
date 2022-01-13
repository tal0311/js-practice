let arr = [121, 11, 23, 3454, 54, 56]
let str = 'somthingstr'
let at = arr.at(-1)

function compareArrays(arr, arr2) {
  let matchNumbers = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        matchNumbers = [...matchNumbers, arr2[j]]
      }
    }
  }
  return matchNumbers
}

console.log('ok')

getStriks()
function getStriks() {
  var print = ' '
  var i = 0
  while (i < 5) {
    var j = 0
    while (j < i) {
      console.log((print += '8'))
      j++
    }

    i++
  }
}
