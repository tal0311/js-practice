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
  }, 10)
}


// better one

function startStopWatch() {
  gWatchInterval = setInterval(updateWatch, 1)
  gStartTime = Date.now()
}

function updateWatch() {
  var now = Date.now()
  var time = ((now - gStartTime) / 1000).toFixed(3)
  var elTime = document.querySelector('.time')
  elTime.innerText = time
}

function endStopWatch() {
  clearInterval(gWatchInterval)
  gWatchInterval = null
}
