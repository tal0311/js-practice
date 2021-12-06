document.write('<h3>Square</h3>')
for (let i = 0; i < 4; i++) {
  for (let i = 0; i < 4; i++) {
    document.write(' #')
  }
  document.write('<br>')
}

document.write('<h3>Triangle</h3>')
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    document.write(' #')
  }
  document.write('<br>')
}

document.write('<h3>Inverted Triangle</h3>')
for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write(' #')
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

document.write('<h3>diamond shape</h3>')
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

document.write('<br>')
document.write('<br>')
document.write('%%%%')
document.write('<br>')
document.write('<br>')

let length = 5
for (let i = 0; i < length; i++) {
  for (let j = 0; j < i; j++) {
    document.write('*')
  }
  document.write('<br>')
}
