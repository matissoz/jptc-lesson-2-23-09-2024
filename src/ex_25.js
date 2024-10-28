"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateAxePattern(n) {
    var width = 2 * n + 10;
    for (var i = 0; i < n; i++) {
        var outerDots = '-'.repeat(width - 2 - i);
        var innerDots = '-'.repeat(i);
        console.log(outerDots + '*' + innerDots + '*' + outerDots);
    }
    var bladeWidth = width - n - 2;
    var middleSection = '*'.repeat(bladeWidth) + '-'.repeat(n);
    for (var i = 0; i < n; i++) {
        console.log(middleSection);
    }
    for (var i = n - 1; i >= 0; i--) {
        var outerDots = '-'.repeat(width - 2 - i);
        var innerDots = '-'.repeat(i);
        console.log(outerDots + '*' + innerDots + '*' + outerDots);
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    }
    else {
        generateAxePattern(n);
    }
    rl.close();
});
