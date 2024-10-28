"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generatePattern(n) {
    var mid = Math.floor(n / 2);
    for (var i = 0; i < mid; i++) {
        var padding = '-'.repeat(mid - i - 1); 
        var middleHyphens = '-'.repeat(i * 2 + 1); 
        console.log(padding + '*' + middleHyphens + '*' + padding);
    }
    if (n % 2 !== 0) {
        console.log('*' + '-'.repeat(n - 2) + '*');
    }
    else {
        console.log('*'.repeat(n));
    }
    for (var i = mid - 1; i >= 0; i--) {
        var padding = '-'.repeat(mid - i - 1);
        var middleHyphens = '-'.repeat(i * 2 + 1);
        console.log(padding + '*' + middleHyphens + '*' + padding);
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than or equal to 1.");
    }
    else {
        generatePattern(n);
    }
    rl.close();
});
