"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the number: ', function (numberInput) {
    var n = parseInt(numberInput);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than 0.");
        rl.close();
    }
    else {
        rl.question('Select the character: ', function (char) {
            for (var i = 1; i <= n; i++) {
                console.log(char.repeat(i).split('').join(' '));
            }
            rl.close();
        });
    }
});
