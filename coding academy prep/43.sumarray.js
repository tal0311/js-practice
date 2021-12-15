// 43.Write the function sumArrays that gets 2 arrays and returns the sum of the two
// arrays. I.e: [1, 4, 3] [2, 5, 1, 9] => [3, 9, 4, 9]
// TIP: this can be done in a single loop by first identifying the shorter or longer array
// from the two.

let arr1 = [1, 2, 3, 5, 6, 78]
let arr2 = [10, 22, 37, 52, 63, 58]

console.log(arr1, arr2)

function sumArray(arr1, arr2) {
  console.log(arr1, arr2)
  sumOfArrays = []
  for (let i = 0; i < arr1.length; i++) {
    sum = arr1[i] + arr2[i] || arr1[i]
    sumOfArrays.push(sum)
  }
  return sumOfArrays
}
console.log(sumArray(arr1, arr2))
