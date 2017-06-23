const Person = require('./lib/Person');

let ben = new Person('Mark Jacobs');

ben.on('speaks', function(says){
    console.log(`${this.name} says "${says}".`);
});
ben.emit('speaks', "I really do believe that art changes the landscape of the world");

