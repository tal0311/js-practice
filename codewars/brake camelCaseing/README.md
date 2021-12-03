## regex camel casing

resources:
https://stackoverflow.com/questions/12001953/javascript-and-regex-split-string-and-keep-the-separator
https://fireship.io/lessons/regex-cheat-sheet-js/

split method wil not preserve value of emitter, to do that in regex use /(?=[regex])/g

my Intuitive way was to check if upperCase()

<!-- code -->

function solution(string) {
return string
.split('')
.map((el) => {
if (el === el.toUpperCase()) {
el = ' ' + el
}
return el
})
.join('')
}

      **it is possible to check for the result of a method**
