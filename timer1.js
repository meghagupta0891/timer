var timers = process.argv.slice(2);
var sortedTimer = timers.filter(function(item) {
    return (typeof parseInt(item) === "number")
}).sort();
var positiveNumbersOnly = sortedTimer.filter(function(item) {
    return ( item >= 0)
});
console.log(positiveNumbersOnly);
for(let i = 0 ; i < positiveNumbersOnly.length ; i++) {
    setTimeout(function(){
       process.stdout.write('\x07');
    },positiveNumbersOnly[i]*1000);
}