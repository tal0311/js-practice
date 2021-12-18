// 51.+UnitTesting Object as a Map: Write the function countWordApperances(txt) that
// returns an object map. This object will have a key that will be the word. The value will
// be the count (how many times this word appeared in the string).
// example: countWordApperances('puki ben david and muki ben david') will return:
// { puki: 1, ben: 2, david: 2, and: 1, muki: 1

str = 'puki ben david and muki ben david'

// function countWord(str) {
//   let strToArr = str.split(' ')
//   let obj = new Map()

//   strToArr.forEach((el) => {
//     obj.set(el, 0)
//   })

//   for (let [key, value] of obj) {
//     for (let v = 0; v < strToArr.length; v++) {
//       if (key == strToArr[v]) {
//         obj.set(key, (value += 1))
//       }
//     }
//   }
//   return obj
// }

// console.log(countWord(str))

function countWords(str) {
  let count = {}

  toArr = str.split(' ')
  console.log(toArr)
  toArr.forEach((item) => {
    if (count[item]) {
      count[item]++
    } else {
      count[item] = 1
    }
  })
  return count
}

console.log(countWords(str))
