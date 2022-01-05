let pets = [
  {
    petName: 'luli',
    age: 4,
    weight: 20,
  },
  {
    petName: 'puki',
    age: 2,
    weight: 15,
  },
  {
    petName: 'shuki',
    age: 5,
    weight: 12,
  },
]
for (let i = 0; i < pets.length; i++) {
  petName = pets[i].petName
  console.log(petName)
}

let nums1 = [4, 5, 6]
let nums2 = [7, 8, 9]
let nums3 = [1, 3, 43]

let numsArr = [nums1, nums2, nums3]

let biggestNum = 0
for (let i = 0; i < numsArr.length; i++) {
  number = numsArr[i]
  for (let j = 0; j < number.length; j++) {
    if (number[i] > biggestNum) {
      biggestNum = number[i]
    }
  }
}
console.log(biggestNum)
