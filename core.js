var path = require('path'); // path manipulation 
var util = require('util'); // utilities for node
var v8 = require('v8');    // google v8 engine memory , Heap statistic etc 

console.log(path.basename(__filename));
var diruploads = path.join(__dirname, 'www', 'files', 'uploads');
util.log(diruploads);
util.log(diruploads);
util.log(v8.getHeapSpaceStatistics());