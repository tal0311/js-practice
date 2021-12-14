// Write a function named countVotes(votes, candidateName) that counts how many
// votes this candidate got. i.e.: if the votes array looks like this: ['Nuli', 'Pingi', 'Uza',
// 'Shabi', ‘Uza’] And the candidateName is : 'Uza', the function returns 2.

arr = ['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza']
console.log(arr)

let arrCount = []
for (let i = 0; i < arr.length; i++) {
  const element = arr[i]
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      count++
    }
  }
  answer = `${element} have ${count} votes`
  arrCount.push(answer)
}
console.log(arrCount)
