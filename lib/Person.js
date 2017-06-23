
const EventEmitter = require('events').EventEmitter;
const util = require('util');

let emitter = new EventEmitter();

let Person = function(name){
      this.name = name;

}
//  using the utility module that has inbuilt inheriting methods that helps
// the Person object inherit eventEmitter methods from events module 

util.inherits(Person, EventEmitter); 

module.exports = Person;
