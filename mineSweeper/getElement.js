function getElement(selection) {
  let element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    throw Error('no element with that name')
  }
}

export default getElement
