var timers = process.argv.slice(2);
var sortedTimer = timers.sort();
for(let i = 0 ; i < sortedTimer.length ; i++) {
   setTimeout(function(){
       process.stdout.write('\x07');
   },sortedTimer[i]*1000);
}