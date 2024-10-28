"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateBoxPattern(n) {
    if (n < 3) {
        console.log("Please enter a number greater than or equal to 3.");
        return;
    }
    var sideSymbols = Math.floor(n / 2);
    var middleUnderscores = n % 2 === 0 ? n - 4 : n - 3;
    var roof = '/' + '^'.repeat(sideSymbols) + '\\' +
        '_'.repeat(middleUnderscores) +
        '/' + '^'.repeat(sideSymbols) + '\\';
    console.log(roof);
    for (var i = 0; i < n - 3; i++) {
        console.log('|' + ' '.repeat(n * 2 - 3) + '|');
    }
    console.log('|' + ' '.repeat(sideSymbols) + '_'.repeat(middleUnderscores) + ' '.repeat(sideSymbols) + '|');
    var floor = '\\' + '_'.repeat(sideSymbols) + '/' +
        ' '.repeat(middleUnderscores) +
        '\\' + '_'.repeat(sideSymbols) + '/';
    console.log(floor);
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n)) {
        console.log("Please enter a valid number.");
    }
    else {
        generateBoxPattern(n);
    }
    rl.close();
});
