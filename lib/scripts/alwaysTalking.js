var sayings = [
  " The last thing on our list is error handling. There’s a lot of different kinds of errors you need to handle in your API",
  "including permission errors (You are not allowed to delete this store)",
  "validation errors (Please specify a name for the store), not found errors, or even internal server errors.",
  "You should always return a semantic HTTP status code with your requests. So for example,",
  "no errors would be a 200 OK, permission errors could be 403 Forbidden, and validation errors could be 422 ",
  "Unprocessable Entity (http://httpstatus.es has a great human-readable list of available status codes)."  
];

var interval = setInterval(function(){
            var i = Math.floor(Math.random()*sayings.length);
            process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data){
      console.log(`STDIN data receieved -> ${data.toString().trim()} `);
      clearInterval(interval);
      process.exit();
});