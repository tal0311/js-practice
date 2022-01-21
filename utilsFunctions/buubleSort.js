function sortNums(nums) {
  var numsCopy = nums.slice()

  for (let i = 0; i < numsCopy.length; i++) {
    for (let j = 1; j < numsCopy.length - 1; j++) {
      if (numsCopy[j] < numsCopy[j - 1]) {
        var temp = numsCopy[j]
        numsCopy[j] = numsCopy[j - 1]
        numsCopy[j - 1] = temp
      }
    }
  }
  return numsCopy
}

export default sortNums
