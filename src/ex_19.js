"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateSymmetricalPattern(n) {
    for (var i = 0; i < n; i++) {
        var row = '';
        for (var j = n; j > i; j--) {
            row += j + ' ';
        }
        row += ' '.repeat(i * 4);
        for (var j = i + 1; j <= n; j++) {
            row += j + ' ';
        }
        console.log(row.trim());
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    }
    else {
        generateSymmetricalPattern(n);
    }
    rl.close();
});
