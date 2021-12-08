console.log('ok')

let firstNumber = 15 || prompt('choose first number')
let secondNumber = 6 || prompt('choose second smaller then first number')

function gcd(firstNumber, secondNumber) {
  for (let divider = 0; divider < secondNumber; divider++) {
    if (firstNumber % divider === 0 && secondNumber % divider === 0) {
      console.log(divider)
    }
  }
}
gcd(firstNumber, secondNumber)
