"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 2) {
        console.log("Please enter a valid number greater than 1.");
    }
    else {
        
        var dashCount = Math.max(1, Math.floor((n - 1) / 2));
        console.log('+' + ' -'.repeat(dashCount) + ' +');
        for (var i = 0; i < n - 2; i++) {
            console.log('|' + ' -'.repeat(dashCount) + ' |');
        }
        console.log('+' + ' -'.repeat(dashCount) + ' +');
    }
    rl.close();
});
