function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
console.log(getRandomLower())
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
console.log(getRandomUpper())
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
console.log(getRandomNumber())

let lengthOfPassword = 6
function generatePassWord() {
  password = ''
  for (let i = 0; i < lengthOfPassword; i++) {
    number = getRandomNumber()
    number2 = getRandomNumber()
    upper = getRandomUpper()
    lower = getRandomLower()
    set = number + upper + lower + number2
    password += set
  }
  return password
}
console.log(generatePassWord())
