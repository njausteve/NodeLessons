// The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
var readline = require('readline');
var util = require('util');
var fs = require('fs');

var rl = readline.createInterface({
    // input: process.stdin,
    input: fs.createReadStream('data.txt'),
    // output: process.stdout,
    // terminal: false  // 

});


rl.on('line', (line) => {
   // util.log(`Line from data file : ${line}`)
   console.log(`${line}`);

});
