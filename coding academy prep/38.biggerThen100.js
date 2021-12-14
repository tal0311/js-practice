// number = Math.floor(Math.random() * 10000)
// console.log(number)

function biggerThen100() {
  arr = []
  for (let i = 0; i < 10; i++) {
    number = Math.floor(Math.random() * 1000)
    if (number > 100) {
      arr.push(number)
    }
  }
  return arr
}
console.log(biggerThen100())
