// var Progress = function(onStart,onProgress,onEnd){
    
//     this.onProgress = onProgress;
//     this.onEnd = onEnd;
//     this.onStart = onStart(this.onProgress,this.onEnd);
    
// }

// Progress.prototype.start = function(){
//     console.log(this.onStart());
// }

// var prog = new Progress(
//     function(callback,call){
//         for(var i = 0;i<=100;i++){
//             if(i%10==0){
//                 callback(i,this.call);
//             }
//         }
//     },
//     function(num,call){
//         console.log(num);
//         if(num == 100){
//             call(num);
//         }
        
//     },
//     function(num){
//         console.log(num+"end");
//         return;
//     }
    
//     );

// prog.start();

var Progress = function(){
    
    this.onProgress = function(num){
        console.log(num);
        return;
    };
    this.onEnd = function(){
        console.log('loop ended');
        return;
    };
    this.onStart = function(){
      console.log('count started');
      return;
    };
    
}

Progress.prototype.start = function(callback1,callback2,callback3){
    callback1();
    for(var i = 1;i<=100;i++){
            if(i%10==0){
                callback2(i);
            }
        }
        callback3();
}

var prog = new Progress();
    

prog.start(prog.onStart,prog.onProgress,prog.onEnd);