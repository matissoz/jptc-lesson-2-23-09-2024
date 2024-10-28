"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateSymbolPattern(n) {
    var mid = Math.floor(n / 2);
    for (var i = 0; i < mid; i++) {
        var symbols = i % 2 === 0 ? '*' : '-';
        var sideSymbols = symbols.repeat(mid - i);
        console.log(sideSymbols + '\\ /' + sideSymbols);
    }
    console.log(' '.repeat(mid) + '@');
    for (var i = mid - 1; i >= 0; i--) {
        var symbols = i % 2 === 0 ? '*' : '-';
        var sideSymbols = symbols.repeat(mid - i);
        console.log(sideSymbols + '/ \\' + sideSymbols);
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 3 || n % 2 === 0) {
        console.log("Please enter an odd number greater than or equal to 3.");
    }
    else {
        generateSymbolPattern(n);
    }
    rl.close();
});
