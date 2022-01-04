function compareArrays(arr, arr2) {
  let matchNumbers = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        matchNumbers = [...matchNumbers, arr2[j]]
      }
    }
  }
  return matchNumbers
}

export default compareArrays
