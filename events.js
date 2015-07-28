var events = require('events');

var count = new events.EventEmitter();





count.on('start', function() {
    console.log('Starting count');
    for(var i = 1;i<=100;i++){
            if(i%10==0){
                callback2(i);
            }
        }
});
