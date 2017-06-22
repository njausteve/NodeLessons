// The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
var readline = require('readline');
var util = require('util');
var fs = require('fs');

var rl = readline.createInterface({
    // input: process.stdin,
    input: fs.createReadStream('data.txt'),
    output: process.stdout,

});


rl.on('line', (line) => {
    util.log(`Line from data file : ${line}`)
});

// rl.question('What do you think of node.js ??', (answer) => {

//     util.log(`Thank you for you valuable feedback : ${answer}`);

//     rl.pause();
//     readline.clearScreenDown();
// });