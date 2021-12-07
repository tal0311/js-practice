let size = 5

document.write('<h3>Hollow square</h3>')

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (i == size - 1 || i == 0 || j == 0 || j == size - 1) {
      document.write(' *')
    } else {
      document.write('&nbsp&nbsp&nbsp')
    }
  }
  document.write('<br>')
}
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (i == size - 1 || j == 0) {
      document.write(' *')
    } else {
      document.write('&nbsp&nbsp&nbsp')
    }
  }
  document.write('<br>')
}

document.write('<h3>Bars</h3>')

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (j == 0 || j == size - 1) {
      document.write('* ')
    } else document.write(' &nbsp&nbsp&nbsp')
  }
  document.write('<br>')
}

document.write('<h3>Square</h3>')
for (let i = 0; i < 4; i++) {
  for (let i = 0; i < 4; i++) {
    document.write(' *')
  }
  document.write('<br>')
}

document.write('<h3>Triangle</h3>')
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    document.write(' *')
  }
  document.write('<br>')
}

document.write('<h3>Inverted Triangle</h3>')
for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write(' *')
  }
  document.write('<br>')
}

document.write('<h3>Pyramid shape</h3>')
for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write(' &nbsp&nbsp')
  }
  for (let x = 0; x < i; x++) {
    document.write(' #')
  }
  for (let l = 0; l < i; l++) {
    document.write(' #')
  }
  document.write('<br>')
}

document.write('<h3>Diamond shape</h3>')
for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write(' &nbsp&nbsp')
  }
  for (let x = 0; x < i; x++) {
    document.write(' #')
  }
  for (let l = 0; l < i; l++) {
    document.write(' #')
  }
  document.write('<br>')
}
for (let i = 0; i < 5; i++) {
  for (let t = 0; t < i; t++) {
    document.write(' &nbsp&nbsp')
  }
  for (let x = 5; x > i; x--) {
    document.write(' #')
  }
  for (let j = 5; j > i; j--) {
    document.write(' #')
  }
  document.write('<br>')
}
