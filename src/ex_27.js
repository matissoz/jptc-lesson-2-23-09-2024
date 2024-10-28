"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateCheckerboard(n) {
    for (var i = 0; i < n; i++) {
        if (i % 2 === 0) {
            console.log(' '.repeat(1) + '# '.repeat(n).trim());
        }
        else {
            console.log('# '.repeat(n).trim());
        }
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    }
    else {
        generateCheckerboard(n);
    }
    rl.close();
});
