"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateHexagonPattern(n) {
    for (var i = 0; i < n; i++) {
        var outerDots = '.'.repeat(n - i);
        var innerUnderscores = '_'.repeat(n * 2 - 3 + i * 2);
        console.log(outerDots + '//' + innerUnderscores + '\\\\' + outerDots);
    }
    var middleUnderscores = '_'.repeat(n * 2 - 5);
    console.log('//' + middleUnderscores + 'STOP!' + middleUnderscores + '\\\\');
    for (var i = n - 1; i >= 0; i--) {
        var outerDots = '.'.repeat(n - i);
        var innerUnderscores = '_'.repeat(n * 2 - 3 + i * 2);
        console.log(outerDots + '\\\\' + innerUnderscores + '//' + outerDots);
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 3) {
        console.log("Please enter a valid number greater than or equal to 3.");
    }
    else {
        generateHexagonPattern(n);
    }
    rl.close();
});
