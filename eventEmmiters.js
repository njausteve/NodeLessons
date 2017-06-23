const eventEmmiter = require('events');


class MyEventEmmiter extends eventEmmiter {}

const MyEmmiter = new MyEventEmmiter();

MyEmmiter.on('event', function(a, b) {

      setInterval(() => {
        console.log(a, b);
    }, 6000);
    
});

MyEmmiter.addListener('event', () => {

  console.log('listener added');

});


MyEmmiter.emit('event', 'a', 'b');

console.log(MyEmmiter.listenerCount('event'));
