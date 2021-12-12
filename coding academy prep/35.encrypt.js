// 34.+UnitTesting Write the function encrypt that gets a string and encrypts it. It replaces
// each character code with the code+5 (I.e. 'r' will be replaced by: 'w'). NOTE: The
// function should encrypt the entire string by shifting each letter as described above.
// Now write the function decrypt that decrypts a message. Tip: try to write in the
// console: 'ABC'.charCodeAt(0)
// Tip - search for the opposite function to charCodeAt
// Copyright 2020 © misterBIT
// Bonus: extract the common logic to an encode function that both encrypts and
// decrypts

// console.log('abc'.charCodeAt(2) + 5)

// let encryptedArr = []
// function encrypt(str) {
//   for (let i = 0; i < str.length; i++) {
//     letter = str[i].charCodeAt(str[i]) + 5

//     encryptedArr.push(letter)
//   }

//   return encryptedArr
// }

// encrypt(toEncrypt)

// function decrypt(arr) {
//   decryptStr = ''
//   for (let i = 0; i < arr.length; i++) {
//     letter = String.fromCharCode(arr[i] - 5)
//     decryptStr += letter
//   }
//   return decryptStr
// }
// console.log(decrypt(encryptedArr))

let toEncrypt = 'message decrypted'
let toDecrypt
function encrypt(toDecrypt) {
  if (toEncrypt) {
    let encryptedArr = []
    for (let i = 0; i < toEncrypt.length; i++) {
      letter = toEncrypt[i].charCodeAt(toEncrypt[i]) + 5

      encryptedArr.push(letter)
    }

    console.log(encryptedArr)

    toDecrypt = encryptedArr.join(' ')
    return toDecrypt
  } else {
    return console.log('ok')
  }
}

encrypt(toDecrypt)

// function decrypt(arr) {
//   console.log(arr.split(' '))
//   decryptStr = ''
//   for (let i = 0; i < arr.length; i++) {
//     letter = String.fromCharCode(arr[i] - 5)
//     decryptStr += letter
//   }
//   console.log(decryptStr)
//   return decryptStr
// }
// console.log(decrypt(encrypt(encrypted)))
