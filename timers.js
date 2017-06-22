var waitTime = 200;
var currentTime = 0;
var timeInterval = 10;

function writePercentage(currentTime) {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    if (currentTime < 100) { process.stdout.write(`waiting .... ${currentTime} % `); } else {
        clearInterval(interval); // clear setInterval
        process.stdout.write("... done .. ");
    }

};


var interval = setInterval(function() {

    currentTime = currentTime + 1;

    writePercentage(currentTime);

}, timeInterval);