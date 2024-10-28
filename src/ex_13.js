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
        var numStars = n % 2 === 0 ? i * 2 + 2 : i * 2 + 1;
        var padding = '-'.repeat(mid - i - 1);
        console.log(padding + '*'.repeat(numStars) + padding);
    }
    console.log('*'.repeat(n));
    for (var i = 0; i < mid; i++) {
        console.log('|' + '*'.repeat(n - 2) + '|');
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 2) {
        console.log("Please enter a number greater than or equal to 2.");
    }
    else {
        generatePattern(n);
    }
    rl.close();
});
