"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function printRectangle(n) {
    for (var i = 0; i < n; i++) {
        console.log('*'.repeat(n));
    }
}
rl.question('Enter the number: ', function (answer) {
    var n = parseInt(answer);
    printRectangle(n);
    rl.close();
});
