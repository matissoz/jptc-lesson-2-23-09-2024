var prompt = require('prompt-sync')();
function printRectangle(n) {
    var row = Array(n).fill('*').join(' ');
    for (var i = 0; i < n; i++) {
        console.log(row);
    }
}
console.log('Enter the number:');
var n = parseInt(prompt(''));
printRectangle(n);
