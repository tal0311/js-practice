// 40.Write a function named getLoremIpsum(wordsCount) that return a sentence with
// random dummy text (google: lorem ipsum...) TIP, here are the steps you may use to
// solve this:
// a. First, write a function named getWord(). The function returns a single word
// made out of 3-5 random letters the length of the word will be generated
// randomly. Tip: you can create a string or an array of all the characters in the
// English alphabet.
// b. Lastly, call this function in a loop to create a sentence.

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
