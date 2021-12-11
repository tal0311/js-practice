// 32. Read a string from the user and print it backwards using a loop

let str =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt, accusamus voluptatibus Aeque Adolor cupiditate enim, magni alias, porro adipisci temporibus! Inventore provident neque pariatur deleniti ab aut possimus obcaecati?'
// reversName = []
// for (let i = str.length; i >= 0; i--) {
//   console.log(str[i])
//   reversName.push(str[i])
// }
// console.log(reversName.join(''))

// 33.+UnitTesting VOWELS (aeiou)
// code the following functions:
// a. Write a function named printVowelsCount(str) that gets a string and print how
// many times each vowel appears.
// b. Write a function that gets a string and changes the vowels to lowercase letters,
// and the rest to uppercase letters (GiZiM GiDoo).
// c. Write a function that gets a string and doubles all the vowels in it.
// Test the functions using the inputs: “aeiouAEIOU” “TelAvivBeach”

const printVowelsCount = (str) => {
  let countA = 0
  let countO = 0
  let countU = 0
  let countE = 0
  let countI = 0
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      countA++
    }
    if (str[i] === 'o' || str[i] === 'O') {
      countO++
    }
    if (str[i] === 'e' || str[i] === 'E') {
      countE++
    }
    if (str[i] === 'u' || str[i] === 'U') {
      countU++
    }
    if (str[i] === 'i' || str[i] === 'i') {
      countI++
    }
  }
  return console.log(`a:`, countA, `o:`, countO, 'u:', countU, 'i:', countI)
}

printVowelsCount(str)

// b. Write a function that gets a string and changes the vowels to lowercase letters,
// and the rest to uppercase letters (GiZiM GiDoo).

// resources:
//https://www.youtube.com/watch?v=PenXAtiFmJc

function toLowerCase(str) {
  let strArr = str.split('')
  let upperCase = []
  for (let i = 0; i < strArr.length; i++) {
    if (
      strArr[i] === 'a' ||
      strArr[i] === 'e' ||
      strArr[i] === 'i' ||
      strArr[i] === 'o' ||
      strArr[i] === 'u'
    ) {
      upperCase.push(str[i].toUpperCase())
    } else upperCase.push(str[i])
  }
  return upperCase.join('')
}
console.log(toLowerCase(str))
