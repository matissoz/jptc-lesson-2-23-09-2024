"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than 0.");
    }
    else {
        console.log(' '.repeat(n) + '|');
        for (var i = 1; i <= n; i++) {
            console.log(' '.repeat(n - i) + '*'.repeat(i) + ' | ' + '*'.repeat(i));
        }
    }
    rl.close();
});
