"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateNumberTriangle(n) {
    for (var i = 0; i < n; i++) {
        var row = '';
        var num = Math.pow(2, i);
        for (var j = 0; j <= i; j++) {
            row += num.toString().padStart(4, ' ') + ' ';
            num /= 2;
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
        generateNumberTriangle(n);
    }
    rl.close();
});
