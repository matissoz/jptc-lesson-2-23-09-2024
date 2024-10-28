"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generatePattern(n) {
    var width = n * 2;
    console.log('*'.repeat(width) + '   ' + '*'.repeat(width));
    for (var i = 1; i < n - 1; i++) {
        var slashes = '*' + '/'.repeat(width - 2) + '*';
        var bars = '|'.repeat(i);
        if (i === Math.floor((n - 1) / 2)) {
            console.log(slashes + bars + ' ' + slashes);
        }
        else {
            console.log(slashes + ' '.repeat(bars.length) + slashes);
        }
    }
    console.log('*'.repeat(width) + '   ' + '*'.repeat(width));
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 3) {
        console.log("Please enter a valid number greater than or equal to 3.");
    }
    else {
        generatePattern(n);
    }
    rl.close();
});
