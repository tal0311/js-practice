// 44.Write the function printNumsCount(nums). The array nums will contain integers in the
// range of 0-3 such as:
// 3 2 0 2 2 0 3
// The function prints how many times each of these numbers appears in the array.
// GUIDANCE: the fact that the values are in a specific range allows us to use an array
// where the index is actually the number itself. The value in the array counts the
// appearances of the numbers.
// e.g. for the array [3,2,0,2,2,0,3] the array will look like this: [2,0,3,2]

// function printNumsCount() {
//   for (let i = 0; i < 5; i++) {
//     let randomNumber = Math.floor(Math.random() * 4)
//     arr.push((arr[randomNumber] = randomNumber))
//   }
//   return arr
// }
// printNumsCount()

// 45.Write the function removeDuplicates(nums). The array nums should contain numbers
// in the range of 0-10 such as:

let arr = [7, 1, 4, 9, 8, 2, 0, 6, 8, 9]

function removeDuplicates(arr) {
  arrNew = []
  for (let i = 0; i < arr.length; i++) {
    if (arrNew.includes(arr[i])) {
    } else arrNew.push(arr[i])
  }
  return arrNew
}

removeDuplicates(arr)

multiplier = 5

function multBy(nums, multiplier) {
  console.log(nums)
  arr = []
  for (let i = 0; i < nums.length; i++) {
    multipliedNumber = nums[i] * multiplier
    arr.push(multipliedNumber)
  }
  return arr
}
console.log(multBy(arr, multiplier))
