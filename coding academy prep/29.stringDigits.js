// 29.Read a number from the user (keep it as string such as “24367”) and then:
// a. Basic operations:
// i. Print each of its digits in a separate line.
// ii. Calculate the sum of its digits.
// iii. Calculate the multiplication (מכפלה (of its digits
// iv. Sum it’s first and last digits.
// v. Print it with it’s first and last digits swapped (2731=>1732)
// vi. Check whether it’s symmetric (like this number: 95459)
// vii. Print the number reversed (BONUS: as a number and not as string).
// b. BONUS: Special Numbers
// i. Check if the number is an Armstrong number. I.e 371 is an Armstrong
// number: 33+73+13 =371. If the number passed the test, print it to the
// console.
// ii. Check if the number is a Perfect number. Perfect number is a number
// that the sum of all its dividers is the number itself. I.e 6 is a perfect
// number (1+2+3).
// Copyright 2020 © misterBIT
// iii. Read a number from the user. Store it in a variable called max. The
// function should print all the perfect numbers and all the Armstrong
// numbers that are smaller than max.

// 29.Read a number from the user (keep it as string such as “24367”) and then:
let userNumber = '2731' || prompt('choose a Number')
let userNumberArr = userNumber.split('')

userNumberArr = userNumberArr.map((item) => Number(item))

// ii. Calculate the sum of its digits.
// let total = userNumberArr.reduce((cur, acc) => {
//   return acc + cur
// })

// console.log(total)

// iii. Calculate the multiplication
// let multi = userNumberArr.reduce((cur, acc) => cur * acc)
// console.log(multi)

// iv. Sum it’s first and last digits.
// console.log(userNumberArr[0] + userNumberArr[userNumberArr.length - 1])

// v. Print it with it’s first and last digits swapped (2731=>1732)
// function firstIsLast(arr) {
//   console.log((last = arr[arr.length - 1]))
//   console.log((temp = arr[0]))
//   arr[0] = last
//   last = temp
//   return arr
// }
// console.log(firstIsLast(userNumberArr))
// vi. Check whether it’s symmetric (like this number: 95459)
// function isSymmetric(number) {
//   let reversed = number.split('').reverse().join('')

//   if (reversed === number) {
//     return 'is symmetric'
//   } else return 'is not symmetric'
// }

// console.log(isSymmetric(userNumber))
// vii. Print the number reversed (BONUS: as a number and not as string).
let reversed = Number(userNumber.split('').reverse().join(''))
console.log(reversed)
// B. special numbers
// i. Check if the number is an Armstrong number.
function isStrongNumber(userNumberArr) {
  let power = userNumberArr.length
  let toThePowerOfLength = userNumberArr.map((item) => Math.pow(item, power))
  toThePowerOfLength = toThePowerOfLength.reduce((cur, acc) => cur + acc)

  if (userNumberArr.join('') == toThePowerOfLength) {
    return 'this is a ARMSTRONG number'
  } else return 'this is not a ARMSTRONG NUMBER'
}
console.log(isStrongNumber(userNumberArr))

// perfect numbers

function isPerfect() {
  let targetNumber = 28
  let arrTarget = []
  for (let i = 1; i < targetNumber; i++) {
    console.log(targetNumber % i === 0, i)

    if (targetNumber % i === 0) {
      arrTarget.push(i)
    }
    console.log(arrTarget)
  }
  let sum = arrTarget.reduce((cur, acc) => cur + acc)

  if (sum === targetNumber) {
    return 'perfect number'
  } else return 'not perfect'
}
console.log(isPerfect())
