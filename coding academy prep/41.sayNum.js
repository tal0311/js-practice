// 41.+UnitTesting Write a function named sayNum(num) that prints each digit in words.
// I.e: 123 => One Two Three. 7294 => Seven Two Nine Four. TIP: You may use
// Switch inside a loop OR an array named digitNames. (Or what the heck, try them
// both.

const arrNum = [
  'zero',
  'one',
  'tow',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]
let number = 1230987

function sayNum(number) {
  numberArr = number.toString().split('')
  sayNumber = []
  for (let i = 0; i < numberArr.length; i++) {
    index = Number(numberArr[i])

    sayNumber.push(arrNum[index])
  }
  return sayNumber.join(' ')
}
console.log(sayNum(number))
