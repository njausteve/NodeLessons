const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);
let realPerson = {
                    name: "",
                    sayings: []
                    };

rl.question("what is the name of a real Person ? \n  > ", function(answer) {
  
   realPerson.name = answer;

   rl.setPrompt(`what would ${realPerson.name} say ?  \n  > `);  //setPromt question on terminal
   rl.prompt();   //trigger the actual set prompt above

   rl.on('line', function (saying){
           
           if(saying.toLowerCase().trim() == 'exit'){
               rl.close();
           }  else{
           
           rl.setPrompt(`what else would ${realPerson.name} say ? ('exit' to leave) \n  > `);                            
           rl.prompt();
           realPerson.sayings.push(saying.trim());     
          }
   });

rl.on('close', function(){

     console.log("%s is a real Person and has this sayings %j", realPerson.name, realPerson.sayings);
     process.exit();
});

});
