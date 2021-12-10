let user1Str = 'talamit' //|| prompt(' user 1 login string ')
let user2Str = 'tal amit' //|| prompt(' user 2 log in string ')

console.log(user1Str.length)
console.log(user2Str.length)

const getStringsLength = () => {
  if (!user2Str || !user1Str) return alert('must have valid string')

  if (user1Str.length > user2Str.length) {
    return console.log('first string is longer')
  } else return console.log('second string is longer')
}

console.log(getStringsLength())

console.log('c:', user1Str.length)
console.log('d:', user1Str[0], user1Str[user1Str.length - 1])
console.log('e:', user1Str.toUpperCase(), user1Str.toLocaleLowerCase())
