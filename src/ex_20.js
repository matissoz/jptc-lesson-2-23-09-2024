"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateNumberPattern(n) {
    for (var i = n; i >= 1; i--) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += j;
            if (j < i) {
                row += ' * ';
            }
        }
        console.log(row);
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    }
    else {
        generateNumberPattern(n);
    }
    rl.close();
});
