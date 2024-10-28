"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateDiamondPattern(n, direction) {
    if (direction === 'R') {
        for (var i = 0; i < n; i++) {
            console.log(' '.repeat(i * 2) + '*'.repeat(n - i));
        }
        for (var i = n - 2; i >= 0; i--) {
            console.log(' '.repeat(i * 2) + '*'.repeat(n - i));
        }
    }
    else if (direction === 'L') {
        for (var i = 0; i < n; i++) {
            console.log(' '.repeat((n - i - 1) * 2) + '*'.repeat(n - i));
        }
        for (var i = 1; i < n; i++) {
            console.log(' '.repeat((n - i - 1) * 2) + '*'.repeat(n - i));
        }
    }
    else {
        console.log("Invalid direction. Please enter 'R' or 'L'.");
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
        rl.close();
        return;
    }
    rl.question('Select direction: (R/L) ', function (direction) {
        generateDiamondPattern(n, direction.toUpperCase());
        rl.close();
    });
});
