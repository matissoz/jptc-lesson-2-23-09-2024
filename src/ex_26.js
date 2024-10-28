"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateMultiplicationTable(n) {
    var header = ' * |';
    for (var i = 1; i <= n; i++) {
        header += "  ".concat(i.toString().padStart(2), " ");
    }
    console.log(header);
    console.log('-'.repeat(header.length));
    for (var i = 1; i <= n; i++) {
        var row = "".concat(i.toString().padStart(2), " |");
        for (var j = 1; j <= n; j++) {
            row += "  ".concat((i * j).toString().padStart(2), " ");
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
        generateMultiplicationTable(n);
    }
    rl.close();
});
