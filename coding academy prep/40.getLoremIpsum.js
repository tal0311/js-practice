let alphabet = 'abcdefghijklmnopqrstuvwxyz'

console.log(alphabet)

function getRandomLetter() {
  LetterIndex = Math.floor(Math.random() * 27)
  return LetterIndex
}
function getRandomWordLength() {
  wordLength = Math.floor(Math.random() * 10)
  return wordLength
}

let sentenceLength = 20

function getLoremIpsum(str) {
  loremIpsum = ''
  console.log(str)
  for (let i = 0; i < sentenceLength; i++) {
    index = getRandomLetter()
    loremIpsum += str[index]

    for (let i = 0; i < getRandomWordLength(); i++) {
      index = getRandomLetter()
      loremIpsum += str[index]
    }
    loremIpsum += ' '
  }
  loremIpsum += ' '
  return loremIpsum
}
console.log(getLoremIpsum(alphabet))
