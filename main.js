const start_stop = document.getElementById("start_stop");
const reset = document.getElementById("reset");
const stopwatch = document.getElementById("stopwatch");

var timeBegan = null,
    timeStopped = null,
    stoppedDuration = 0,
    started = null;

function startTimer() {
    if (timeBegan === null) {
        timeBegan = new Date();
    }

    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    }
    console.log(stoppedDuration);

    started = setInterval(clockRunning, 10);
}

function stopTimer() {
    timeStopped = new Date();
    clearInterval(started);
}

function resetTimer() {
    clearInterval(started);
    stoppedDuration = 0;
    timeBegan = null;
    timeStopped = null;
    stopwatch.innerHTML = "00:00:00.000";
    start_stop.innerHTML = "Start"
}

function clockRunning() {
    var currentTime = new Date(),
        timeElapsed = new Date(currentTime - timeBegan - stoppedDuration),
        hour = timeElapsed.getUTCHours(),
        min = timeElapsed.getUTCMinutes(),
        sec = timeElapsed.getUTCSeconds(),
        ms = timeElapsed.getUTCMilliseconds();

    stopwatch.innerHTML =
        (hour > 9 ? hour : "0" + hour) + ":" +
        (min > 9 ? min : "0" + min) + ":" +
        (sec > 9 ? sec : "0" + sec) + "." +
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};

start_stop.addEventListener('click', () => {
    if (start_stop.innerHTML == "Start") {
        start_stop.innerHTML = "Stop"

        startTimer();

    } else {
        start_stop.innerHTML = "Start"
        stopTimer();
    }
})


reset.addEventListener('click', () => {
    resetTimer();
})

function stopWatch() {




}