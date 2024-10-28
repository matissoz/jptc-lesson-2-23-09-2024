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
        for (var i = 0; i < n; i++) {
            if (i === 0 || i === n - 1) {
                console.log('*'.repeat(n));
            }
            else {
                console.log('*' + ' '.repeat(n - 2) + '*');
            }
        }
    }
    rl.close();
});
