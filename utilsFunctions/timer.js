gTimer = 0
var gElTimer
function renderTimer() {
  var stopWatch = Number(gTimer).toFixed(3) + ''
  gElTimer.innerHtml = `<p>${stopWatch}</p>`
}

function startTimer() {
  gIntervalId = setInterval(function () {
    //global var
    gTimer += 0.01
    renderTimer()
  })
}
