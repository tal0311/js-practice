function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>'
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>'
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j]
      var className = 'cell cell-' + i + '-' + j
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>'
  var elContainer = document.querySelector(selector)
  elContainer.innerHTML = strHTML
}


// from cinema lesson i+j in data sets
function renderCinema() {
    var strHTML = '';
    for (var i = 0; i < gCinema.length; i++) {
        strHTML += `<tr class="cinema-row" >\n`
        for (var j = 0; j < gCinema[0].length; j++) {
            var cell = gCinema[i][j];
            // For cell of type SEAT add seat class
            var className = '';
            if (cell.type !== 'X') {
                className = 'seat'
                // For cell that is booked add booked class
                if (cell.isBooked) className += ' booked'
            } 

            var seatTitle = 'Seat ' + (i+1) + ',' + (j+1)

            strHTML += `\t<td class="cell ${className}" 
                            onclick="cellClicked(this, ${i}, ${j})"
                            title="${seatTitle}" >
                         </td>\n`
        }
        strHTML += `</tr>\n`
    }
    // console.log(strHTML)

    var elSeats = document.querySelector('.cinema-seats');
    elSeats.innerHTML = strHTML;
}

//from nums project tds per row

function renderBoard() {
  var strHtml = ''
  var length = Math.sqrt(BOARD_SIZE)
  for (let i = 0; i < length; i++) {
    strHtml += `<tr>`
    for (let j = 0; j < length; j++) {
      strHtml += `<td onclick="cellClicked(this)">${randomNum()}</td>`
    }
    strHtml += `</tr>`
  }

  var elBoard = document.querySelector('.board')
  elBoard.innerHTML = strHtml
}


// from pacman project
function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>'
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>'
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j]
      var className = 'cell cell-' + i + '-' + j
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>'
  var elContainer = document.querySelector(selector)
  elContainer.innerHTML = strHTML
}
