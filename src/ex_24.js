"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateArrowPattern(n) {
    var middle = Math.floor(n / 2);
    for (var i = 0; i < middle; i++) {
        var outerDots = '.'.repeat(middle - i);
        var hashes = '#'.repeat(n - 2 * (middle - i));
        console.log(outerDots + hashes + outerDots);
    }
    for (var i = 0; i < n; i++) {
        var outerDots = '.'.repeat(middle);
        var innerDots = '.'.repeat(n - 2 * middle - 2);
        console.log(outerDots + '#' + innerDots + '#' + outerDots);
    }
    for (var i = 0; i < middle; i++) {
        var outerDots = '.'.repeat(middle + i + 1);
        console.log(outerDots + '#' + outerDots);
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 3 || n % 2 === 0) {
        console.log("Please enter an odd number greater than or equal to 3.");
    }
    else {
        generateArrowPattern(n);
    }
    rl.close();
});
