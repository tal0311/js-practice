str = 'puki ben david and muki ben david'

function countWord(str) {
  let strToArr = str.split(' ')
  let obj = new Map()

  strToArr.forEach((el) => {
    obj.set(el, 0)
  })

  for (let [key, value] of obj) {
    for (let v = 0; v < strToArr.length; v++) {
      if (key == strToArr[v]) {
        obj.set(key, (value += 1))
      }
    }
  }
  return obj
}

console.log(countWord(str))
